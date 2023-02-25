
const btnEl = document.querySelectorAll('button');

const btnDecrementEl = btnEl[0];
const btnIncrementEl = btnEl[1]; 
const counterEl = btnDecrementEl.nextElementSibling;

let counterValue = 0;

btnDecrementEl.addEventListener('click', () => {
    counterValue -= 1;
    counterEl.textContent = counterValue;
})

btnIncrementEl.addEventListener('click', () => {
    counterValue += 1;
    counterEl.textContent = counterValue;
})

