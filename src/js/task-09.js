function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const changeBtn = document.querySelector('.change-color');
const colorSpan = document.querySelector('span[class=color]');

changeBtn.addEventListener('click', changingColor);

function rgb2hex(rgb) {
  rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  function hex(x) {
    return ('0' + parseInt(x).toString(16)).slice(-2);
  }
  return '#' + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function changingColor() {
  body.setAttribute('style', `background-color:${getRandomHexColor()};`);
  const currentColor = body.style.backgroundColor;
  colorSpan.textContent = `${rgb2hex(currentColor)}`;
  console.log(colorSpan.textContent);
}
// console.log(changeBtn)
