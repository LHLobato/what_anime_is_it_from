// Use global `ort` provided by CDN to avoid Vite dynamic-import wasm issues
import _ from 'lodash';

const ort: any = (globalThis as any).ort;

export interface AnimePrediction {
  id: number;
  name: string;
  probability: string;
  rawProbability: number;
}

const ANIME_CLASSES = ['Black Clover', 'Blue Lock', 'Naruto'];

// Singleton session to avoid reloading the model on every inference
let session: any | null = null;
const MODEL_PATH = import.meta.env.BASE_URL + 'mobilenetforjs.onnx';

async function getSession(): Promise<any> {
  if (session) return session;
  try {
    if (!ort) throw new Error('onnxruntime-web (ort) not found on global scope');
    session = await ort.InferenceSession.create(MODEL_PATH, {
      executionProviders: ['webgl', 'wasm'],
      graphOptimizationLevel: 'all'
    });
    return session;
  } catch (e) {
    console.error('Failed to create ONNX session:', e);
    throw new Error('Falha ao carregar o modelo ONNX. ' + String(e));
  }
}

export async function runAnimeModel(inputTensor: ort.Tensor): Promise<[AnimePrediction[], number]> {
  const sess = await getSession();

  const start = Date.now();
  const feeds: Record<string, ort.Tensor> = {};
  feeds[sess.inputNames[0]] = inputTensor;
  const outputData = await sess.run(feeds);
  const end = Date.now();
  const inferenceTime = (end - start) / 1000;

  const output = outputData[sess.outputNames[0]];
  const outputArray = Array.prototype.slice.call(output.data) as number[];

  const outputSoftmax = softmax(outputArray);
  const results = getAnimePredictions(outputSoftmax);
  return [results, inferenceTime];
}

// Exported helper to preload the model/session (useful at app startup)
export async function preloadModel(): Promise<void> {
  await getSession();
}

function softmax(arr: number[]): number[] {
  const largest = Math.max(...arr);
  const sum = arr.map((x) => Math.exp(x - largest)).reduce((a, b) => a + b, 0);
  return arr.map((x) => Math.exp(x - largest) / sum);
}

export function getAnimePredictions(classProbabilities: number[]): AnimePrediction[] {
  const probWithIndex = classProbabilities.map((prob, index) => [prob, index] as [number, number]);
  const sorted = _.reverse(_.sortBy(probWithIndex, (pair) => pair[0]));
  return sorted.map((pair) => {
    const prob = pair[0];
    const index = pair[1];
    return {
      id: index,
      name: ANIME_CLASSES[index],
      probability: (prob * 100).toFixed(2) + '%',
      rawProbability: prob
    } as AnimePrediction;
  });
}
