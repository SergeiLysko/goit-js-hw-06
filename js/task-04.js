let counterValue = 0;
const currentValue = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
decrementBtn.addEventListener("click", () => {
    counterValue -= 1;
    updateValue();
});
incrementBtn.addEventListener("click", () => {
    counterValue += 1;
    updateValue();
});
function updateValue() {
  currentValue.textContent = counterValue;
}