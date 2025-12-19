import streamlit as st
from PIL import Image
import time
import torch 
import torchvision.models as models
import torch.nn as nn
from torchvision import transforms
# --- 1. CONFIGURAÇÃO DA PÁGINA ---
Image.MAX_IMAGE_PIXELS = 100000000

@st.cache_resource 
def load_model():
    model = models.efficientnet_b0(weights='DEFAULT')

    num_features = model.classifier[1].in_features 

    model.classifier = nn.Sequential(
        nn.Dropout(p=0.2, inplace=True), # Recomendado colocar de volta
        nn.Linear(num_features, 3)
    )
    checkpoint = torch.load("EfficientNetB0/bestEfficientNetB0-more-images-5unfrozen_100.pth",map_location=torch.device('cpu'))
    model.load_state_dict(checkpoint)
    model.eval()
    device = torch.device('cpu')
    return model, device 

st.set_page_config(
    page_title="Animeletron 3000",
    page_icon="🍥",
    layout="centered",
    initial_sidebar_state="expanded"
) 

# --- 2. PALETA DE CORES E TEMAS ---
ANIME_THEMES = {
    "Naruto": {"color": "#FF8C00", "emoji": "🍥", "msg": "Dattebayo!"},     
    "Black Clover": {"color": "#32CD32", "emoji": "🍀", "msg": "Mada mada!"}, 
    "Blue Lock": {"color": "#00BFFF", "emoji": "⚽", "msg": "Egoísta!"},     
    "Neutral": {"color": "#FFFFFF", "emoji": "🔮", "msg": "Aguardando..."}
}

# --- 3. CSS APRIMORADO ---
st.markdown("""
<style>
    /* 1. FORÇAR O FUNDO GERAL (Imagem Nova e Estável) */
    [data-testid="stAppViewContainer"] {
        /* Imagem: Japan Neon Night (Unsplash) */
        background-image: url("https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=1920&auto=format&fit=crop");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed;
    }

    /* 2. EFEITO DE VIDRO (GLASSMORPHISM) NO CENTRO */
    div.block-container {
        background-color: rgba(0, 0, 0, 0.8); /* Um pouco mais escuro para leitura */
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        border-radius: 20px;
        padding: 3rem !important;
        border: 1px solid rgba(255, 255, 255, 0.15);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
    }

    /* 3. FORÇAR TEXTOS BRANCOS */
    h1, h2, h3, h4, h5, h6, p, li, span, label, div[data-testid="stMarkdownContainer"] p {
        color: #ffffff !important;
        text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
    }

    /* 4. ESTILO DO UPLOAD */
    [data-testid="stFileUploader"] {
        background-color: rgba(255, 255, 255, 0.05);
        border: 2px dashed rgba(255, 255, 255, 0.2);
        border-radius: 15px;
        padding: 20px;
    }
    [data-testid="stFileUploader"]:hover {
        border-color: #FFD700;
    }

    /* 5. BOTÃO CUSTOMIZADO */
    .stButton > button {
        background: linear-gradient(45deg, #FF4B2B, #FF416C);
        color: white !important;
        border: none;
        border-radius: 25px;
        height: 50px;
        font-weight: bold;
        font-size: 18px;
        transition: transform 0.2s;
    }
    .stButton > button:hover {
        transform: scale(1.02);
    }
    
    /* 6. REMOVER CABEÇALHO PADRÃO */
    header[data-testid="stHeader"] {
        background-color: transparent !important;
    }
</style>
""", unsafe_allow_html=True)

# --- 4. SIDEBAR (CONTEXTO) ---
with st.sidebar:
    st.title("Sobre o Projeto")
    st.info(
        """
        Este modelo utiliza uma **EfficientNetB0** treinada via Transfer Learning para identificar o anime de origem da imagem informada.
        
        **Classes Suportadas:**
        - 🍥 Naruto
        - 🍀 Black Clover
        - ⚽ Blue Lock

        Atualizações futuras cobrirão mais animes suportados.
        """
        
    )
    st.divider()
    st.caption("Desenvolvido com Streamlit & PyTorch")

# --- 5. CABEÇALHO ---
col_logo, col_title = st.columns([1, 4])
with col_logo:
    st.markdown("<div style='font-size: 60px; text-align: center;'>⛩️</div>", unsafe_allow_html=True)
with col_title:
    st.title("Animeletron 3000")
    st.markdown("*Classificador de Cenas: Naruto | Black Clover | Blue Lock*")

st.divider()

# --- 6. ÁREA DE UPLOAD ---
col_upload, col_preview = st.columns([1.2, 1])

image = None
uploaded_file = None

with col_upload:
    st.subheader("1. Carregue o frame")
    uploaded_file = st.file_uploader("Solte a imagem aqui (JPG/PNG)", type=["jpg", "jpeg", "png"])

with col_preview:
    if uploaded_file is not None:
        image = Image.open(uploaded_file).convert('RGB')
        st.markdown(
            f'<style>img {{border-radius: 15px; border: 2px solid rgba(255,255,255,0.2);}}</style>', 
            unsafe_allow_html=True
        )
        st.image(image, caption='Prévia da Análise', use_container_width=True)
    else:
        # Placeholder visual
        st.markdown(
            """
            <div style="
                border: 2px dashed #666; 
                background-color: rgba(0,0,0,0.3);
                border-radius: 15px; 
                height: 200px; 
                display: flex; 
                align-items: center; 
                justify-content: center; 
                color: #aaa;">
                🖼️ A imagem aparecerá aqui
            </div>
            """, 
            unsafe_allow_html=True
        )

# --- 7. BOTÃO DE INFERÊNCIA ---
if uploaded_file is not None:
    st.write("###") # Espaçamento
    col_vazia1, col_btn, col_vazia2 = st.columns([1, 2, 1])
    
    with col_btn:
        run_btn = st.button("🔍 INICIAR ANÁLISE 🔍", use_container_width=True)

    if run_btn:
        progress_text = "Processando imagem..."
        transform = transforms.Compose([
        transforms.Resize((224, 224)), 
        transforms.ToTensor(), 
        transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])])

        image_transformed = transform(image)
        input_image = image_transformed.unsqueeze(0)


        my_bar = st.progress(0, text=progress_text)

        model, device = load_model()
        model = model.to(device)
        input_image = input_image.to(device)    
        my_bar.progress(30, text="Carregando modelo...")
        
        with torch.no_grad():
                outputs = model(input_image)
        
        probabilities = torch.nn.functional.softmax(outputs, dim=1)
        predicted_class = torch.argmax(probabilities, dim=1).item()

        mapped_classes = {0:'Black Clover', 1:'Blue Lock', 2:'Naruto'}

        my_bar.progress(70, text="Realizando predição...")
        resultado_final = mapped_classes[predicted_class]
        probs = {"Naruto": probabilities[0][2].item(), "Black Clover": probabilities[0][0].item(), "Blue Lock": probabilities[0][1].item()}
        
        my_bar.progress(100, text="Análise concluída!")
        my_bar.empty()
        # ---------------------------------------------------------

        # --- 8. EXIBIÇÃO DOS RESULTADOS ---
        theme = ANIME_THEMES.get(resultado_final, ANIME_THEMES["Neutral"])
        
        st.divider()
        
        # Container do Vencedor
        st.markdown(f"""
        <div style="
            background-color: rgba(255, 255, 255, 0.1); 
            border-left: 10px solid {theme['color']}; 
            padding: 20px; 
            border-radius: 10px;
            margin-bottom: 20px;
            text-align: center;">
            <h3 style="margin:0; color: #eee !important;">Resultado da Análise:</h3>
            <h1 style="margin:0; font-size: 50px; color: {theme['color']} !important;">
                {theme['emoji']} {resultado_final.upper()}
            </h1>
            <p style="font-style: italic; color: #ccc !important;">"{theme['msg']}"</p>
        </div>
        """, unsafe_allow_html=True)

        if resultado_final == "Naruto":
            st.balloons()
        
        # Métricas detalhadas
        st.subheader("📊 Probabilidades")
        
        c1, c2, c3 = st.columns(3)
        
        def metric_card(col, label, value, color):
            col.markdown(f"""
            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 10px; text-align: center; border: 1px solid {color}44;">
                <p style="margin:0; color: #ccc !important; font-size: 14px;">{label}</p>
                <p style="margin:0; color: {color} !important; font-size: 24px; font-weight: bold;">{value:.1f}%</p>
            </div>
            """, unsafe_allow_html=True)

        metric_card(c1, "Naruto", probs['Naruto']*100, ANIME_THEMES['Naruto']['color'])
        metric_card(c2, "Black Clover", probs['Black Clover']*100, ANIME_THEMES['Black Clover']['color'])
        metric_card(c3, "Blue Lock", probs['Blue Lock']*100, ANIME_THEMES['Blue Lock']['color'])