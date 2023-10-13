import { galleryItems } from './gallery-items.js';
// Change code below this line
const container = document.querySelector('.gallery');

const marcup = galleryItems.map(({ preview, original, description }) =>
    `<li class="gallery__item"> 
    <a href="${original}" class="gallery__link">
    <img src="${preview}" alt="${description}"/>
    </a>
    </li>`).join('')
container.insertAdjacentHTML('beforeend', marcup);

container.addEventListener('click', onLinkClick)

function onLinkClick(evt) {
    evt.preventDefault();
    
    const cardSrc = evt.target.currentSrc;
   
    const currentItem = galleryItems.find(({ preview }) => preview === cardSrc)
    console.log(currentItem);
    
    let lightbox = new SimpleLightbox(
        `<div class="gallery">
         <a href="${cardSrc}" >
    <img src="${cardSrc}" alt="${evt.target.getAttribute('alt')}"/>
    </a>
       </div>` );
    lightbox.on('show.simpleLightbox', function(){})

 }



// console.log(galleryItems);

