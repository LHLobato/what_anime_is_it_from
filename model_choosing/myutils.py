import torch 
import torch.nn as nn
import torch.nn.functional as F
from sklearn.metrics import classification_report, roc_auc_score
from transformers import get_cosine_schedule_with_warmup
import os 
import time
from tqdm import tqdm 

def train(model, num_epochs, train_loader, val_loader, output_dir, model_name, device='cuda'): 
        start_time = time.time()
        patience=10
        print(f'Iniciando treinamento...')
        curr_epoch = 0
        criterion = torch.nn.CrossEntropyLoss()
        scaler = torch.amp.GradScaler('cuda')
        
        cond1 = ('vit' in model_name.lower())
        cond2 = ('convnext' in model_name.lower())
        cond3 = ('mob' in model_name.lower())
        cond4 = ('eff' in model_name.lower())
        condition = cond1 or cond2 or cond3 or cond4
        if condition:
            if cond1 or cond3 or cond4:
                optimizer = torch.optim.AdamW(filter(lambda p: p.requires_grad, model.parameters()), lr=1e-5)
            elif cond2:
                optimizer = torch.optim.AdamW(model.head.parameters(), lr=0.001, weight_decay=0.05)
            scheduler = get_cosine_schedule_with_warmup(
            optimizer,
            num_warmup_steps=0.1 * num_epochs * len(train_loader),  # Warmup de 5 épocas
            num_training_steps=num_epochs * len(train_loader),  # Total de épocas
            )
        else:
            optimizer = torch.optim.AdamW(model.fc.parameters(), lr=0.001, weight_decay=0.05)
            scheduler = torch.optim.lr_scheduler.ReduceLROnPlateau(optimizer,mode = 'max', patience = 10, factor = 0.1)

        best_epoch = 0
        best_loss = float('+inf')
        current_lr = 0
        patience_limit = 0
        
        for epoch in tqdm(range(num_epochs)):
            model.train()
            running_loss = 0.0
            
            all_preds, all_labels, all_proba = [], [], []
            print(f'Epoch: {epoch + 1}....')

            for images, labels in train_loader:
                images, labels = images.to(device), labels.to(device)
                optimizer.zero_grad()
                with torch.amp.autocast('cuda'):
                    outputs = model(images)
                    if cond1:
                        logits = outputs.logits
                    else:
                        logits = outputs
                    loss = criterion(logits, labels)
                scaler.scale(loss).backward()  
                scaler.step(optimizer)
                scaler.update()
                if condition:
                    scheduler.step()
                running_loss += loss.item()
                train_pred_class = torch.argmax(logits, dim=1)
                probabilities = torch.softmax(logits, dim=1)

                all_proba.extend(probabilities[:, 1].detach().cpu().numpy())
                all_preds.extend(train_pred_class.detach().cpu().numpy())
                all_labels.extend(labels.cpu().numpy())

            train_report_dict = classification_report(all_labels, all_preds, output_dict=True)

            
            train_accuracy = train_report_dict['accuracy']
            train_precision_class_0 = train_report_dict['0']['precision']
            train_recall_macro_avg = train_report_dict['macro avg']['recall']
            train_f1_weighted_avg = train_report_dict['weighted avg']['f1-score']

            
            model.eval()
            val_loss = 0.0
            va_preds, va_labels, va_proba = [], [], []

            with torch.no_grad():
                for images, labels in val_loader:
                    images, labels = images.to(device), labels.to(device)

                    with torch.amp.autocast('cuda'):
                        outputs = model(images)
                        if cond1:
                            logits = outputs.logits
                        else:
                            logits = outputs
                        loss = criterion(logits, labels)
                    val_loss += loss.item()

                    pred_class = torch.argmax(logits, dim=1)
                    probabilities = torch.softmax(logits, dim=1)
                    va_proba.extend(probabilities[:, 1].detach().cpu().numpy())
                    va_preds.extend(pred_class.detach().cpu().numpy())
                    va_labels.extend(labels.cpu().numpy())
            
            val_report_dict = classification_report(va_labels, va_preds, output_dict=True)

            
            val_accuracy = val_report_dict['accuracy']
            val_precision_class_0 = val_report_dict['0']['precision']
            val_recall_macro_avg = val_report_dict['macro avg']['recall']
            val_f1_weighted_avg = val_report_dict['weighted avg']['f1-score']

            if not condition:
                scheduler.step(val_loss)

            if val_loss < best_loss:
                best_loss = val_loss
                best_epoch = epoch + 1
                patience_limit  = 0# Salva o limiar ótimo
                os.makedirs(output_dir, exist_ok=True)
                torch.save(model.state_dict(), os.path.join(output_dir, f"{model_name}_{num_epochs}.pth"))
            else:
                patience_limit+=1
            # Logs de treinamento
            
            print(f"Epoch {epoch + 1}/{num_epochs}")
            print(f"| Train Loss: {running_loss / len(train_loader):.4f} | "
                f"Train Acc: {train_accuracy:.4f} | Train Prec: {train_precision_class_0:.4f} | Train Rec: {train_recall_macro_avg:.4f} | Train F1: {train_f1_weighted_avg:.4f}")
            print(f"Val Loss: {val_loss / len(val_loader):.4f} | "
                f"Val Acc: {val_accuracy:.4f} | "
                f"Val Prec: {val_precision_class_0:.4f} | "
                f"Val Rec: {val_recall_macro_avg:.4f} | "
                f"Val F1: {val_f1_weighted_avg:.4f}|")
            
            if current_lr != optimizer.param_groups[0]['lr']:
                for i, group in enumerate(optimizer.param_groups):
                    print(f"Grupo {i}: LR = {group['lr']}, Parâmetros = {len(group['params'])}")
                current_lr = optimizer.param_groups[0]['lr']
            if patience_limit >=patience:
                print(f"Early Stopping triggered with {epoch} epochs!")
                break
            curr_epoch+=1

        total_time = (time.time() - start_time) / 60
        
        print(f'Training Took: {total_time:.2f} minutes!')
        print(f'With an average of {total_time /curr_epoch:.2f} minutes per epoch!')
        
        return best_loss, best_epoch

    #----Função de Teste do modelo.
def test(model, test_loader, model_name, device='cuda'):
        test_preds = []
        test_labels = []
        test_proba = []
        test_loss = 0.0
        criterion = nn.CrossEntropyLoss()
        model.eval()  
        cond1 = ('vit' in model_name.lower())
        with torch.no_grad():  
            for images, labels in test_loader:
                images, labels = images.to(device), labels.to(device)

                with torch.amp.autocast('cuda'):
                    outputs = model(images)
                    if cond1:
                        logits = outputs.logits
                    else:
                        logits = outputs
                    loss = criterion(logits, labels)
                test_loss += loss.item()
                test_pred_class = torch.argmax(logits, dim=1)
                probabilities = torch.softmax(logits, dim=1)
                test_proba.extend(probabilities[:,1].detach().cpu().numpy())
                test_preds.extend(test_pred_class.detach().cpu().numpy())
                test_labels.extend(labels.cpu().numpy())
               
        test_report_dict = classification_report(test_labels, test_preds, output_dict=True)

            
        test_accuracy = test_report_dict['accuracy']
        test_precision_class_0 = test_report_dict['0']['precision']
        test_recall_macro_avg = test_report_dict['macro avg']['recall']
        test_f1_weighted_avg = test_report_dict['weighted avg']['f1-score']
        #test_auc = roc_auc_score(test_labels, test_proba)
            
        print(f"Test Loss: {test_loss / len(test_loader):.4f} | "
            f"Test Acc: {test_accuracy:.4f} | "
            f"Test Prec: {test_precision_class_0:.4f} | "
            f"Test Rec: {test_recall_macro_avg:.4f} | "
            f"Test F1: {test_f1_weighted_avg:.4f}|")
          #  f"Test ROC-AUC: {test_auc:.4f}")


        return test_loss / len(test_loader), test_accuracy, test_precision_class_0, test_recall_macro_avg, test_f1_weighted_avg
