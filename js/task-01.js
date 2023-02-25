const listEl = document.querySelectorAll('.item');
console.log('Number of categories: ', listEl.length);

listEl.forEach((element) => {
    
    const titleListEl = element.firstElementChild;
    console.log('Category: ', titleListEl.textContent);

    const listSubEl = titleListEl.nextElementSibling;
    
    const listItemEl = listSubEl.children;
    console.log('Elements: ', listItemEl.length);
})
