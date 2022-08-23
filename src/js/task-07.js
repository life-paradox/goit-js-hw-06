const controlInput = document.querySelector('#font-size-control');
const currentText = document.querySelector('#text');
currentText.setAttribute('style', `font-size:${controlInput.value}px`);

controlInput.addEventListener('input', onInputControl);

function onInputControl() {
  currentText.style.fontSize = `${controlInput.value}px`;
}
console.dir(currentText);
