import { galleryItems } from "./gallery-items.js";
// Change code below this line

const container = document.querySelector(".gallery");
const marcup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item"> 
    <a href="${original}" class="gallery__link">
    <img src="${preview}" alt="${description}" data-source="${original}"/>
    </a>
    </li>`
  )
  .join("");
container.insertAdjacentHTML("beforeend", marcup);

container.addEventListener("click", onLinkClick);

let instance;

function onLinkClick(evt) {
  evt.preventDefault();

  const cardId = evt.target.dataset.source;
  const currentItem = galleryItems.find(({ original }) => original === cardId);

  instance = basicLightbox.create(
    ` <div>
   <img src="${currentItem.original}" alt="${currentItem.description}">
    </div>
    `
    );

  instance.show();

  console.log(instance.visible());
  if (instance.visible()) {
    document.addEventListener("keydown", closeModalWindowByEsc);
  }
}

function closeModalWindowByEsc(evt) {
  if (evt.key === "Escape") {
    instance.close();

    document.removeEventListener("keydown", closeModalWindowByEsc);
  }
}
// console.log(galleryItems)
