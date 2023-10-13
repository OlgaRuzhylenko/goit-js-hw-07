import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector('.gallery');
const marcup = galleryItems.map(({ preview, original, description }) =>
    `<li class="gallery__item"> 
    <a href="${original}" class="gallery__link">
    <img src="${preview}" alt="${description}" data-source="${original}"/>
    </a>
    </li>`).join('')
container.insertAdjacentHTML('beforeend', marcup);

container.addEventListener('click', onLinkClick)

function onLinkClick(evt) {
    evt.preventDefault();

    const cardId = evt.target.dataset.source;
    const currentItem = galleryItems.find(({ original }) => original === cardId)
    
    const instance = basicLightbox.create(
        ` <div>
   <img src="${currentItem.original}" alt="${currentItem.description}">
    </div>
    `, 
        { closable: false }
    );
    document.addEventListener('keydown', closeModalWindowByEsc);
    function closeModalWindowByEsc(evt) {
        if (evt.key === 'Escape') {
            instance.close()
        }
    }
    instance.show();
}

// console.log(galleryItems)

