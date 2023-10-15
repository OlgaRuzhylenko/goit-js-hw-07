import { galleryItems } from './gallery-items.js';
// Change code below this line
const container = document.querySelector('.gallery');

const markup = galleryItems.map(({ preview, original, description }) =>
    `<li class="gallery__item"> 
    <a href="${original}" class="gallery__link">
    <img src="${preview}" alt="${description}"/>
    </a>
    </li>`).join('')
container.insertAdjacentHTML('beforeend', markup);

    const lightbox = new SimpleLightbox('.gallery a', { 
        captionsData: 'alt',
        captionDelay: 250,
    });


// console.log(galleryItems);

