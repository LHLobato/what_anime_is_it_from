import torch 
import torchvision.models as models
import torch.nn as nn

model = models.mobilenet_v2(weights=None)
num_features = model.last_channel
model.classifier = nn.Sequential(
    nn.Linear(num_features, 3)
)
checkpoint = torch.load("../frontend/streamlit/bestMobileNetV2-more-images-5unfrozen_100.pth")
model.load_state_dict(checkpoint)
model.eval()

dummy_input = torch.zeros(1,3,224,224)
torch.onnx.export(model, dummy_input, "mobilenetforjs.onnx", verbose=True)