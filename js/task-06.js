const inputData = document.querySelector('#validation-input');
console.log(inputData); 

const borderInputValid = document.querySelector('#validation-input.valid');
console.log(borderInputValid);


let inputLength = 0;

const handleMakeInput = (event) => {

    if (inputLength === Number(inputData.getAttribute('data-length'))) {
        event.target.classList.remove('invalid');
        event.target.classList.add('valid');
                    
    } else {
        event.target.classList.remove('valid');
        event.target.classList.add('invalid');
        
    }
}

inputData.addEventListener('input', (event) => {
     inputLength = event.currentTarget.value.length;
   })

inputData.addEventListener('blur', handleMakeInput );
