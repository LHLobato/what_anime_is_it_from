import * as ort from 'onnxruntime-web';

/**
 * Browser preprocessing using Canvas. Accepts a data URL or image URL.
 */
export async function preprocessImage(imageSource: string): Promise<ort.Tensor> {
  const IMG_SIZE = 224;

  const img = new Image();
  img.src = imageSource;
  await new Promise<void>((resolve, reject) => {
    img.onload = () => resolve();
    img.onerror = (e) => reject(e);
  });

  const canvas = document.createElement('canvas');
  canvas.width = IMG_SIZE;
  canvas.height = IMG_SIZE;
  const ctx = canvas.getContext('2d')!;

  ctx.drawImage(img, 0, 0, IMG_SIZE, IMG_SIZE);
  const imageData = ctx.getImageData(0, 0, IMG_SIZE, IMG_SIZE).data;

  const float32Data = new Float32Array(1 * 3 * IMG_SIZE * IMG_SIZE);
  const mean = [0.485, 0.456, 0.406];
  const std = [0.229, 0.224, 0.225];

  for (let i = 0; i < IMG_SIZE * IMG_SIZE; i++) {
    const r = imageData[i * 4] / 255.0;
    const g = imageData[i * 4 + 1] / 255.0;
    const b = imageData[i * 4 + 2] / 255.0;

    float32Data[i] = (r - mean[0]) / std[0];
    float32Data[i + (IMG_SIZE * IMG_SIZE)] = (g - mean[1]) / std[1];
    float32Data[i + (2 * IMG_SIZE * IMG_SIZE)] = (b - mean[2]) / std[2];
  }

  return new ort.Tensor('float32', float32Data, [1, 3, IMG_SIZE, IMG_SIZE]);
}
