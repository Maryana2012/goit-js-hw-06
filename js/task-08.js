const form = document.querySelector('.login-form');

const emailEl = form[0];
const passwordEl = form[1];
const btnEl = form[2];


const handleMakeSubmit = (event) => {
    
    event.preventDefault();

    const { elements: {email, password}
          } = event.currentTarget;

    if (emailEl.value === '' || passwordEl.value === '') {
       return alert('Please fill in all fields');

    } else {
        console.log(`Email: ${email.value}, Password: ${password.value} `);
    }
   
    event.currentTarget.reset();  
}

form.addEventListener('submit', handleMakeSubmit);
