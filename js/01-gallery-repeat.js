import { galleryItems } from "./gallery-items.js";

const galeryList = document.querySelector('.gallery')
let instance

function galleryTemplate(item){
   return `<li class="gallery__item">
   <a class="gallery__link" href="${item.original}">
  <img src="${item.preview}" alt="${item.description}" class='gallery__image' data-source="${item.original}">
  </a>
</li>`
}

function galleryCreate(galleryItems) {
return galleryItems.map(galleryTemplate).join('');
}

function render(){
    const markup = galleryCreate(galleryItems);
    galeryList.innerHTML = markup;
}

render()

galeryList.addEventListener('click', onImageClick)
function onImageClick(evt){
    document.addEventListener('keydown', onEsckapePress)
    evt.preventDefault();
   if (evt.target.nodeName !== 'IMG') {
    return
   }
   
const imgUrl = evt.target.dataset.source;

instance = basicLightbox.create(`
    <img src="${imgUrl}" width="800" height="600">
`)

instance.show()
}


function onEsckapePress(evt){
    
    console.log(evt.code);
    if (evt.code == 'Escape') {
        instance.close()
        document.removeEventListener('keydown', onEsckapePress)
    }
    
}