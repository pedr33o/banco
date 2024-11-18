let index = 0;
const items = document.querySelectorAll('.carrossel-item');
const totalItems = items.length;

const setaEsquerda = document.querySelector('.seta-esquerda');
const setaDireita = document.querySelector('.seta-direita');
const carrosselContainer = document.querySelector('.carrossel-container');

// Função para mostrar o próximo item
function mostrarProximo() {
  index = (index + 1) % totalItems;
  atualizarCarrossel();
}

// Função para mostrar o item anterior
function mostrarAnterior() {
  index = (index - 1 + totalItems) % totalItems;
  atualizarCarrossel();
}

// Função para atualizar a posição do carrossel
function atualizarCarrossel() {
  const novoTransform = -index * 100;
  carrosselContainer.style.transform = `translateX(${novoTransform}%)`;
}

// Eventos de clique para as setas
setaEsquerda.addEventListener('click', mostrarAnterior);
setaDireita.addEventListener('click', mostrarProximo);

// Alterando o carrossel automaticamente a cada 5 segundos
setInterval(mostrarProximo, 5000);
