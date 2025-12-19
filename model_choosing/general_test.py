import torch 
import torch.nn as nn
import torch.nn.functional as F
import pandas as pd 
import numpy as np 
from torchvision import datasets, transforms
import torchvision.models as models
from torch.utils.data import DataLoader 
import torch.optim as optim
from sklearn.metrics import classification_report, roc_auc_score
import timm
import time
import os
import torch.backends.cudnn as cudnn
import config 
from transformers import get_cosine_schedule_with_warmup
from PIL import Image
from myutils import train, test
from transformers import ViTForImageClassification



model_name = config.MODEL_NAME
save_dir = f"../best_model/{model_name}/"
test_dataset_dir = f"../results/general_{model_name}.csv"

num_epochs = config.NUM_EPOCHS
transform = transforms.Compose([
transforms.Resize((224, 224)), 
transforms.ToTensor(), 
transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])])


VAL_SPLIT_PERCENT = 0.10  

for data_root_path in config.DATA_DIRS_ROOT:  
    
    train_dataset = datasets.ImageFolder(
        root = config.DATA_DIR_TRAIN, 
        transform=transform
    )
    
    val_dataset = datasets.ImageFolder(
        root = config.DATA_DIR_VAL, 
        transform=transform
    )

    test_dataset = datasets.ImageFolder(
        root = config.DATA_DIR_TEST, # Ex: 'animes_test/'
        transform=transform
    )


    print(f"Divisão: Treino ({len(train_dataset)}), Validação ({len(val_dataset)}), Teste ({len(test_dataset)})")

    test_loader = DataLoader(test_dataset, batch_size = config.BATCH_SIZE, shuffle=False, num_workers=8, pin_memory=True)
    val_loader = DataLoader(val_dataset, batch_size = config.BATCH_SIZE, shuffle=False, num_workers=8, pin_memory=True)
    train_loader = DataLoader(train_dataset, batch_size = config.BATCH_SIZE, shuffle=True, num_workers=8, pin_memory=True)
    
    print("Dados carregados com sucesso...")

    save_model_name = f"best{model_name}-more-images-5unfrozen"
    checkpoint_filename = f"{save_model_name}_{num_epochs}.pth"
         
    if model_name == "ResNet18":
        model = models.resnet18(weights='DEFAULT')
        num_features = model.fc.in_features
        model.fc = nn.Sequential(
        nn.Linear(num_features, 3)
        )
    elif model_name == "EfficientNetB0":
        model = models.efficientnet_b0(weights='DEFAULT')

        num_features = model.classifier[1].in_features 

        model.classifier = nn.Sequential(
             nn.Dropout(p=0.2, inplace=True), # Recomendado colocar de volta
             nn.Linear(num_features, 3)
         )
         
    elif model_name == "ConvNext-Nano":
        model = timm.create_model('convnext_nano',pretrained=True,num_classes=3,in_chans=3)
        checkpoint = torch.load(checkpoint_path)
        model.load_state_dict(checkpoint)  

    elif model_name == "ViTB16":
        model = ViTForImageClassification.from_pretrained(
                "google/vit-base-patch16-224",  # Modelo pré-treinado para 224x224
                num_labels=3,ignore_mismatched_sizes=True  # Classificação binária
    )
    elif model_name == "MobileNetV2":
        model = models.mobilenet_v2(weights='DEFAULT')
        num_features = model.last_channel
        model.classifier = nn.Sequential(
        nn.Linear(num_features, 3)
        )
        checkpoint_path = "../best_model/MobileNetV2/bestMobileNetV2-more-images_100.pth"
        checkpoint = torch.load(checkpoint_path)
        model.load_state_dict(checkpoint)

    #for params in model.parameters():
        #params.requires_grad = False

    if model_name == "ResNet18":    
        for params in model.fc.parameters():
            params.requires_grad = True

    elif model_name == "MobileNetV2" or "EfficientNetB0":

        for child in list(model.features.children())[:-5]: # Deixa só as ultimas 5 "partes" soltas
            for param in child.parameters():
                param.requires_grad = False

        for params in model.classifier.parameters():
            params.requires_grad = True



    elif model_name == "ConvNext-Nano":
        for params in model.head.parameters():
            params.requires_grad = True
        
            
    elif model_name == "ViTB16":
        for params in model.classifier.parameters():
            params.requires_grad = True
        
    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
    cudnn.benchmark = True
            
    model = model.to(device)
        
    best_train_acc, best_epoch= train(model, num_epochs, train_loader, val_loader, device=device, output_dir=save_dir, model_name=save_model_name)

    checkpoint_path = os.path.join(save_dir, checkpoint_filename)    
    checkpoint = torch.load(checkpoint_path)
    model.load_state_dict(checkpoint)

    loss, acc, prec, rec, f1 = test(model, test_loader, model_name, device)


    print(f'Melhor acurácia de treinamento: {best_train_acc} atingida com {best_epoch} épocas')

            #---- Chamada das funcoes.
    data = {
            "Model": model_name+"5unfrozen", 
            "Epochs": config.NUM_EPOCHS,
            "Test_Loss":loss,
            "Test_Acuracia": acc, 
            "Test_Precisao": prec, 
            "Test_Recall": rec, 
            "Test_F1-Score": f1,
            #"Test_ROC-AUC": auc,
            "Best_Acc_Train":best_train_acc,
            "Best_Epoch_Acc":best_epoch,
            "Num_Samples":config.NUM_SAMPLES,
            "Dropout":config.P,
           "Resolution":config.RESOLUTION,
            "Data Normalization": 'Yes', 
            }

    test_df = pd.DataFrame([data])

    if os.path.exists(test_dataset_dir):
        test_df.to_csv(test_dataset_dir, mode='a', header=False, index=False)
    else:
        test_df.to_csv(test_dataset_dir, mode='w', header=True, index=False)
