const inputNameEl = document.querySelector('#name-input');

const outputNameEl = document.querySelector('#name-output');


const handleMakeOutput = (event) => {

    outputNameEl.textContent = event.currentTarget.value.trim();
    
    if (outputNameEl.textContent.length === 0) {

        outputNameEl.textContent = "Anonymous";

        } 
    } 

inputNameEl.addEventListener('input', handleMakeOutput);

  