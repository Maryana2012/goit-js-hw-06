const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const createImgGallery= ({ url, alt }) => 
` <li>
<img src="${url}" alt="${alt}">
</li>`

const createGallery = images.map((image) => createImgGallery(image)).join('');

const listEl = document.querySelector('.gallery');
listEl.insertAdjacentHTML("afterbegin", createGallery);

const imgListEl = document.querySelectorAll('img');

imgListEl.forEach((image) => {
  image.style.width = "320px";
  image.style.height = "200px";
})
