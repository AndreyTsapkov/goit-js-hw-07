import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('ul.gallery');

const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) => `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}" />
</a>`
  )
  .join('');
gallery.insertAdjacentHTML('afterbegin', galleryMarkup);

var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
