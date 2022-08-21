let counterValue = 0;
const counter = document.querySelector('#value');
const incrBtn = document.querySelector('button[data-action="increment"]');
const decrBtn = document.querySelector('button[data-action="decrement"]');

const counterDec = () => {
  counterValue -= 1;
  counter.textContent = counterValue;
};
const counterInc = () => {
  counterValue += 1;
  counter.textContent = counterValue;
};
incrBtn.addEventListener('click', counterInc);
decrBtn.addEventListener('click', counterDec);
