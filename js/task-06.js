const inputData = document.querySelector('#validation-input');
console.log(inputData); 

let inputLength = 0;

const handleMakeInput = (event) => {

    if (inputLength === Number(inputData.getAttribute('data-length'))) {

        event.target.style.border = '2px solid #bdbdbd;';
        event.target.style.borderColor = '#4caf50';
        
    } else {

        event.target.style.border = '2px solid #bdbdbd;';
        event.target.style.borderColor = '#f44336';
    }
}

inputData.addEventListener('input', (event) => {
 
    inputLength = event.currentTarget.value.length;

   })

inputData.addEventListener('blur', handleMakeInput );
