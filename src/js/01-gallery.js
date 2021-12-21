// Add imports above this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const galleryConteiner = document.querySelector('.gallery');

const photoMarkup = createGallery(galleryItems);

galleryConteiner.insertAdjacentHTML('beforeend', photoMarkup);


function createGallery(galleryItems) {
return galleryItems.map(({preview, original, description}) => 
  { return `
  <div class="gallery__item">
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
  </div>
  `
  }).join('')
};

let galleryNew = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: "250ms"});

galleryNew.on('show.simplelightbox', function () {
  console.log("Не требует прослушивание кликов")
});
