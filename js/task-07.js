const inputEl = document.querySelector('#font-size-control');

const textEl = document.querySelector('#text');

const minEl = Number(inputEl.getAttribute('min'));
const maxEl = Number(inputEl.getAttribute('max'));
console.log(minEl, maxEl);


const handleMakeText = (event) => {
    
         textEl.style.fontSize = `${event.currentTarget.value}px`;
    }

inputEl.addEventListener('input', handleMakeText);