const nameInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
  output.textContent = nameInput.value = null ? 'Anonymous' : nameInput.value;
});
