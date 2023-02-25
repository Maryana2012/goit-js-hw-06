const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const listItemEl = ingredients.map((ingredient) => {

  const itemEl = document.createElement('li');
 
  itemEl.textContent = ingredient;

  itemEl.classList.add('item');

  return itemEl;
})


const listEl = document.querySelector('#ingredients');

listEl.append(...listItemEl);