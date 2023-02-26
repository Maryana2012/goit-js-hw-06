function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// debugger
const inputEl = document.querySelector('input');
const BtnEls = document.querySelectorAll('button');
const createBtnEl = BtnEls[0];
const destroyBtnEl = BtnEls[1]; 
const boxesEl = document.querySelector('#boxes');

// debugger

inputEl.addEventListener('input', (event) => {
  const amount = event.currentTarget.value;
   console.log(event.currentTarget.value);  
  }) 
  
// const amount = inputEl.value;

// console.log(inputEl);
// console.log(inputEl.value);
// console.log(amount);

// createBtnEl.addEventListener('click', createBoxes);


// function createBoxes(amount) {
  
//   let width = 0;
//   let height = 0; 
  
//   for (let i = 1; i <= amount; i += 1){
    
//     width += 10;
//     height += 10;
    
//     const boxEl = document.createElement('div');
    
//     boxEl.style.width = `${width}px`;
//     boxEl.style.height = `${height}px`;
//     boxEl.style.backgroundColor = getRandomHexColor();
    
//     boxesEl.append(boxEl);
//   }
//   return boxesEl; 
// }
