import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector('.gallery');
const marcup = galleryItems.map(({ preview, original, description }) =>
    `<li> 
    <a href="${original}">
    <img src="${preview}" alt="${description}" data-source="${original}"/>
    </a>
    </li>`).join('')
container.insertAdjacentHTML('beforeend', marcup);




console.log(galleryItems);

