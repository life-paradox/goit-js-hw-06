const input = document.querySelector('#validation-input');
const validLength = input.dataset.length;

input.addEventListener('blur', onBlurInput);

function onBlurInput() {
  input.classList = input.value.length != validLength ? 'invalid' : 'valid';
}
