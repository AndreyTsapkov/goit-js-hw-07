import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('div.gallery');
gallery.addEventListener('click', openModalImage);

const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) => `<div class="gallery__item">
      <a class="gallery__link" href="${original}"
        ><img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
          data-source="${original}"
        />
      </a>
    </div>`
  )
  .join('');
gallery.insertAdjacentHTML('afterbegin', galleryMarkup);

function openModalImage(event) {
  if (event.target.nodeName !== 'IMG') return;

  event.preventDefault();

  const modalImage = basicLightbox.create(
    `<img src="${event.target.dataset.source}" alt="${event.target.alt}">`
  );
  modalImage.show();
  window.addEventListener('keydown', event => {
    if (event.code === 'Escape' && modalImage.visible()) {
      modalImage.close();
    }
  });
}
