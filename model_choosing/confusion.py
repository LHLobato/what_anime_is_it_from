import torch
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.metrics import confusion_matrix
import os
from torchvision import datasets, transforms
import torchvision.models as models
import config 
import torch.nn as nn
import timm
from torch.utils.data import DataLoader 

# --------------------------------------------------------------------------
# PARÂMETROS NECESSÁRIOS (Ajuste conforme o seu setup)
# --------------------------------------------------------------------------
# O objeto 'model' deve ser a instância do seu modelo (ResNet, ViT)
# O objeto 'test_loader' deve ser o DataLoader com seus dados de teste
# O objeto 'device' deve ser 'cuda' ou 'cpu'
# Você precisará da lista de nomes das classes (animes)
# --------------------------------------------------------------------------

def get_class_names(test_loader):
    """
    Tenta obter os nomes das classes (animes) do dataset de teste.
    Isso funciona se o dataset subjacente for uma ImageFolder.
    """
    if isinstance(test_loader.dataset, torch.utils.data.Subset):
        # Se for um subset (como após o random_split), acessa o dataset original
        return test_loader.dataset.dataset.classes
    elif isinstance(test_loader.dataset, datasets.ImageFolder):
        return test_loader.dataset.classes
    else:
        # Retorna nomes genéricos se não conseguir identificar a classe exata
        return [f'Classe {i}' for i in range(len(np.unique(test_loader.dataset.targets)))]


def plot_confusion_matrix(model, test_loader, device, model_name):
    """
    Roda o modelo no conjunto de teste e plota a Matriz de Confusão.
    """
    all_preds = []
    all_labels = []
    
    # 1. Coleta de Predições
    model.eval()
    cond1 = ('vit' in model_name.lower())
    
    with torch.no_grad():
        for images, labels in test_loader:
            images, labels = images.to(device), labels.to(device)
            
            # Execução do modelo (usando a lógica condicional do seu código)
            with torch.amp.autocast('cuda'):
                outputs = model(images)
                if cond1:
                    logits = outputs.logits
                else:
                    logits = outputs
                    
                preds = torch.argmax(logits, dim=1)
                
                all_preds.extend(preds.cpu().numpy())
                all_labels.extend(labels.cpu().numpy())
    
    # 2. Geração da Matriz
    cm = confusion_matrix(all_labels, all_preds)
    class_names = get_class_names(test_loader)
    
    # 3. Normalização (Visualiza as taxas de erro em %)
    cm_normalized = cm.astype('float') / cm.sum(axis=1)[:, np.newaxis]
    
    # 4. Plotagem
    plt.figure(figsize=(8, 6))
    sns.heatmap(
        cm_normalized, 
        annot=True, 
        fmt=".2f", 
        cmap="Blues",
        xticklabels=class_names, 
        yticklabels=class_names
    )
    plt.title(f'Matriz de Confusão Normalizada - {model_name}')
    plt.ylabel('Real (True Label)')
    plt.xlabel('Predito (Predicted Label)')
    
    # Salva o gráfico
    output_filename = f"confusion_matrix_{model_name}.png"
    plt.savefig(output_filename)
    print(f"\n✅ Matriz de Confusão salva como: {output_filename}")
    plt.show()


# --------------------------------------------------------------------------
# EXEMPLO DE CHAMADA (INTEGRAÇÃO NO SEU SCRIPT PRINCIPAL)
# --------------------------------------------------------------------------
# --- ASSUMINDO ESTES OBJETOS JÁ EXISTEM APÓS O CARREGAMENTO DO MELHOR MODELO: ---
model_name = config.MODEL_NAME
save_model_name = f"best{model_name}"
num_epochs = config.NUM_EPOCHS


model = models.efficientnet_b0(weights='DEFAULT')

num_features = model.classifier[1].in_features 

model.classifier = nn.Sequential(
     nn.Dropout(p=0.2, inplace=True), # Recomendado colocar de volta
     nn.Linear(num_features, 3)
     )
         
save_dir = f"../best_model/{model_name}/"
save_model_name = f"best{model_name}-more-images-5unfrozen"
checkpoint_filename = f"{save_model_name}_{num_epochs}.pth"
checkpoint_path = os.path.join(save_dir, checkpoint_filename)
    
# Carrega o modelo com o melhor desempenho de VALIDAÇÃO (o modelo salvo)
print(f"\nCarregando o melhor checkpoint: {checkpoint_path}")
checkpoint = torch.load(checkpoint_path)
model.load_state_dict(checkpoint)

# ----------------------------------------------------------------------
# 2. TESTE FINAL (No modelo ideal)
# ----------------------------------------------------------------------

#loss, acc, prec, rec, f1 = test(model, test_loader, model_name, device)
transform = transforms.Compose([
transforms.Resize((224, 224)), 
transforms.ToTensor(), 
transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])])

#print(f'Melhor acurácia de treinamento: {best_train_acc} atingida com {best_epoch} épocas')
test_dataset = datasets.ImageFolder(
        root = config.DATA_DIR_TEST, # Ex: 'animes_test/'
        transform=transform
)

print("\n" + "="*40)
print(f"📂 Total de imagens de teste: {len(test_dataset)}")
print(f"🏷️  Classes encontradas (Ordem do Modelo): {test_dataset.classes}")
print(f"🔢 Mapeamento (Nome -> Índice): {test_dataset.class_to_idx}")
print("="*40 + "\n")



# ----------------------------------------------------------------------
# 3. GERAÇÃO DA MATRIZ DE CONFUSÃO (Análise de Erros)
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model = model.float() 
model = model.to(device)
# ----------------------------------------------------------------------
test_loader = DataLoader(test_dataset, batch_size = config.BATCH_SIZE, shuffle=False, num_workers=8, pin_memory=True)

try:
    plot_confusion_matrix(model, test_loader, device, model_name)
except Exception as e:
    print(f"Não foi possível gerar a Matriz de Confusão. Erro: {e}")
    print("Verifique se as bibliotecas matplotlib e seaborn estão instaladas.")