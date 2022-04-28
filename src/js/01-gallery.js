// Add imports above this line
import { galleryItems } from './gallery-items';

const galleryEl = document.querySelector('.gallery');

// 1.Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.

function createImageGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
    </a>
    </div>`;
    })
    .join('');
}
galleryEl.insertAdjacentHTML('beforeend', createImageGallery(galleryItems));



// galleryEl.addEventListener('click', onOpenLargeImg);
// function onOpenLargeImg(event) {
//     event.preventDefault();

//     const isImagesEl = event.target.classList.contains('gallery__image');
//   if (!isImagesEl) {
//     return;
//   }
  
//     const largeImgLink = event.target.dataset.source;


//     const instance = basicLightbox.create(`
//   <img 
//   src="${largeImgLink}" 
//   alt="${event.target.alt}">
//   `);
//   instance.show();
// };


console.log(galleryItems);


