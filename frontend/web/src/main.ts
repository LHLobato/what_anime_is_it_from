import { fileToBase64 } from './utils/utils';
import { preprocessImage } from './utils/imageHelper';
import { runAnimeModel, preloadModel } from './utils/modelRunner';

const imageInput = document.getElementById('imageInput') as HTMLInputElement;
const imagePreview = document.getElementById('imagePreview') as HTMLImageElement;
const resultsSection = document.getElementById('resultsSection') as HTMLElement;
const statusText = document.getElementById('statusText') as HTMLElement;
const loadingSpinner = document.getElementById('loadingSpinner') as HTMLElement;

imageInput.addEventListener('change', async (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (!file) return;

  resultsSection.style.display = 'none';
  statusText.innerText = 'Processando imagem...';
  loadingSpinner.style.display = 'block';

  imagePreview.src = URL.createObjectURL(file);
  imagePreview.style.display = 'block';

  try {
    // Convert file to base64
    const base64 = await fileToBase64(file);

    // Preprocess (canvas) — isolate errors
    let tensor;
    try {
      tensor = await preprocessImage(base64);
    } catch (preErr) {
      console.error('Erro no preprocessamento:', preErr);
      statusText.innerText = 'Erro no preprocessamento: ' + (preErr?.message || String(preErr));
      return;
    }

    // Run model inference — isolate errors
    try {
      const [results, time] = await runAnimeModel(tensor);
      displayResults(results, time);
    } catch (inferErr) {
      console.error('Erro na inferência:', inferErr);
      statusText.innerText = 'Erro na inferência: ' + (inferErr?.message || String(inferErr));
      return;
    }

  } catch (e) {
    console.error('Erro no fluxo:', e);
    statusText.innerText = 'Erro ao processar imagem: ' + (e?.message || String(e));
  } finally {
    loadingSpinner.style.display = 'none';
  }
});

// No seu arquivo principal (ex: main.ts)

// ... resto do código ...

function displayResults(results: AnimePrediction[], time: number) {
    statusText.innerText = '';
    resultsSection.style.display = 'block';

    const winner = results[0];
    const winnerContainer = document.getElementById('winnerContainer') as HTMLDivElement;
    // MUDANÇA: Pegamos o H2 agora
    const winnerName = document.getElementById('winnerName') as HTMLHeadingElement; 
    const winnerEmoji = document.getElementById('winnerEmoji') as HTMLSpanElement;
    // MUDANÇA: Pegamos o container DIV em vez de UL
    const detailsContainer = document.getElementById('detailsList') as HTMLDivElement;
    const inferenceTimeSpan = document.getElementById('inferenceTime') as HTMLSpanElement;

    // Atualiza o vencedor (Apenas o nome, a % vai na lista abaixo)
    winnerName.innerText = winner.name;

    // Remove classes antigas e adiciona a nova cor
    winnerContainer.classList.remove('naruto-theme', 'black-clover-theme', 'blue-lock-theme', 'neutral');
    let emoji = '🔮';
    if (winner.name === 'Naruto') {
        winnerContainer.classList.add('naruto-theme');
        emoji = '🍥';
    } else if (winner.name === 'Black Clover') {
        winnerContainer.classList.add('black-clover-theme');
        emoji = '🍀';
    } else if (winner.name === 'Blue Lock') {
        winnerContainer.classList.add('blue-lock-theme');
        emoji = '⚽';
    }
    winnerEmoji.innerText = emoji;

    // Preenche a lista de detalhes com o NOVO estilo HTML
    detailsContainer.innerHTML = '';
    results.forEach(res => {
        // Criamos uma div para cada linha em vez de um 'li'
        const row = document.createElement('div');
        row.className = 'detail-item'; // Classe definida no novo CSS
        
        row.innerHTML = `
            <span class="detail-name">${res.name}</span>
            <span class="detail-prob">${res.probability}</span>
        `;
        detailsContainer.appendChild(row);
    });

    inferenceTimeSpan.innerText = time.toFixed(3);
}
// Preload model on startup so loading errors are visible early
(async function init() {
  try {
    statusText.innerText = 'Carregando modelo...';
    await preloadModel();
    statusText.innerText = 'Modelo carregado. Escolha uma imagem.';
  } catch (e) {
    console.error('Erro ao pré-carregar modelo:', e);
    statusText.innerText = 'Erro ao carregar modelo: ' + (e?.message || String(e));
  }
})();
