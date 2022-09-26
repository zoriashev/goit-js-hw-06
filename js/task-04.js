const decrButton = document.querySelector(`[data-action='decrement']`);
const incrButton = document.querySelector(`[data-action='increment']`);
let counterValue = 0;

counterValue = document.querySelector("#value");

decrButton.addEventListener("click", onClickDecrement);
function onClickDecrement() {
  counterValue.textContent -= 1;
}

incrButton.addEventListener("click", onClickIncrement);

function onClickIncrement() {
  counterValue.textContent = Number(counterValue.textContent) + 1;
}
