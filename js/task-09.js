function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const spanEl = document.querySelector('.color');

const bntEl = document.querySelector('.change-color');

const handleMakeBackgroundColor = (event) => {
  const makeColor = getRandomHexColor();

  document.body.style.backgroundColor = makeColor;

  spanEl.textContent = makeColor;
  

}





bntEl.addEventListener('click', handleMakeBackgroundColor);

