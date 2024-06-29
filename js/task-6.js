function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const containerBoxes = document.getElementById('boxes');
const inputNumber = document.querySelector('input[type="number"]')
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

createBtn.addEventListener('click', () => {
  const amount = parseInt(inputNumber.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }
  inputNumber.value = '';
});

destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  containerBoxes.innerHTML = '';
  const fragment = document.createDocumentFragment();
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const divBox = document.createElement('div');
    divBox.style.width = `${size}px`;
    divBox.style.height = `${size}px`;
    size += 10;
    divBox.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(divBox);
  }
  containerBoxes.appendChild(fragment);
}

function destroyBoxes() {
  containerBoxes.innerHTML = '';
}