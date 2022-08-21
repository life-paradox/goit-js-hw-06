const controlInput = document.querySelector('#font-size-control');
const currentText = document.querySelector('#text');

controlInput.addEventListener('input', onInputControl);

function onInputControl() {
  currentText.setAttribute('style', `font-size:${controlInput.value}px`);
}
console.dir(currentText);
