// Add imports above this line
import { galleryItems } from './gallery-items';

import { SimpleLightbox } from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);
const imgConteiner = document.querySelector('.gallery');
const galleryMarcup = createGalaryMarcup(galleryItems);
console.log(imgConteiner)
imgConteiner.insertAdjacentHTML('beforeend', galleryMarcup)

imgConteiner.addEventListener('click', onPicturesClick)

function createGalaryMarcup(galleryItems){
    return galleryItems
    .map(({ preview, original, description }) => {
      return` 
<div class="gallery__item">
  <a class="gallery__link" href="${ original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${ original}"
      alt="${description}"
    />
  </a>
</div>
`
}).join('')

}



function onPicturesClick(event) {
    event.preventDefault();

    const noEventGallary = event.target.nodeName;
    
    if (noEventGallary !== 'IMG') {
        return;
    }
}