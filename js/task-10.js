function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('input');
const BtnEls = document.querySelectorAll('button');
const createBtnEl = BtnEls[0];
const destroyBtnEl = BtnEls[1]; 
const boxesEl = document.querySelector('#boxes');

createBtnEl.addEventListener('click', handleBoxes);

destroyBtnEl.addEventListener('click', () => {
  boxesEl.innerHTML = '';
});


function handleBoxes() {
  
  const amount = Number(inputEl.value);
  createBoxes(amount);
}  

function createBoxes(number) {
  
  let width = 0;
  let height = 0; 
  
  for (let i = 1; i <= number; i += 1){
    
    width += 10;
    height += 10;
    
    const boxEl = document.createElement('div');
    
    boxEl.style.width = `${width}px`;
    boxEl.style.height = `${height}px`;
    boxEl.style.backgroundColor = getRandomHexColor();
    boxEl.style.marginTop = '5px';
    
    boxesEl.append(boxEl);
  }
  return boxesEl; 
}

