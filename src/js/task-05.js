const nameInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
  output.textContent = nameInput.value != 0 ? nameInput.value : 'Anonymous';
});
