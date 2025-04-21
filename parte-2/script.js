/**
 * Retorna um array de índices para uma linha horizontal na grade 9×9.
 * @param {number} row — número da linha (0–8)
 * @param {number} fromCol — coluna inicial (0–8)
 * @param {number} toCol — coluna final (0–8)
 */
const horizontalLine = (row, fromCol, toCol) =>
  Array.from(
    { length: toCol - fromCol + 1 },
    (_, i) => row * 9 + fromCol + i
  );

/**
 * Retorna um array de índices para uma linha vertical na grade 9×9.
 * @param {number} col — número da coluna (0–8)
 * @param {number} fromRow — linha inicial (0–8)
 * @param {number} toRow — linha final (0–8)
 */
const verticalLine = (col, fromRow, toRow) =>
  Array.from(
    { length: toRow - fromRow + 1 },
    (_, i) => (fromRow + i) * 9 + col
  );

const SHAPES = {
  A: [
    ...horizontalLine(0, 2, 6),
    ...horizontalLine(4, 2, 6),
    ...verticalLine(2, 1, 8),
    ...verticalLine(6, 1, 8),
  ],
  C: [
    ...horizontalLine(0, 2, 6),
    ...horizontalLine(8, 2, 6),
    ...verticalLine(2, 1, 7),
  ],
  E: [
    ...verticalLine(2, 0, 8),
    ...horizontalLine(0, 2, 6),
    ...horizontalLine(4, 2, 6),
    ...horizontalLine(8, 2, 6),
  ],
};


/**
 * Cria a matriz 9×9 dentro do container, atribuindo a cada célula
 * um atributo data-index de 0 a 80.
 */
const createGrid = () => {
  const container = document.getElementById('grid-container');
  container.innerHTML = '';
  // Geração funcional de 81 células
  Array.from({ length: 81 }, (_, index) => {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.index = index;
    container.appendChild(cell);
    return cell;
  });
};

/**
 * Limpa todos os destaques da grade, removendo a classe 'active'.
 */
const clearGrid = () => {
  document
    .querySelectorAll('.cell.active')
    .forEach(cell => cell.classList.remove('active'));
};

/**
 * Desenha a inicial especificada, colorindo as células conforme SHAPES.
 * @param {('A'|'C'|'E')} initial - A inicial a ser desenhada.
 */
const drawInitial = initial => {
  clearGrid();
  (SHAPES[initial] || []).forEach(idx => {
    const cell = document.querySelector(`.cell[data-index='${idx}']`);
    if (cell) cell.classList.add('active');
  });
};

// Inicialização após o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
  createGrid();

  const drawButton = document.getElementById('draw-button');
  const initials = ['A', 'C', 'E'];
  let current = 0;

  drawButton.addEventListener('click', () => {
    drawInitial(initials[current]);
    current = (current + 1) % initials.length;
  });
});
