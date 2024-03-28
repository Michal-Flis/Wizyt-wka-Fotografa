const moveGallery = document.querySelector('.move-gallery');
const leftArrow = document.querySelector('.fa-chevron-left');
const rightArrow = document.querySelector('.fa-chevron-right');

let startTranslate = 0;

const moveLeftGallery = () => {
  startTranslate += 50;
  moveGallery.style.transform = `translate(${-startTranslate}%)`;
  console.log(startTranslate);

  if (startTranslate > 150) {
    startTranslate = 0;
    moveGallery.style.transform = `translate(${-startTranslate}%)`;
  }

  if (startTranslate === 50) {
    rightArrow.style.display = 'block';
  } else if (startTranslate === 0) {
    rightArrow.style.display = 'none';
  }

  console.log(startTranslate);
};

const moveRightGallery = () => {
  startTranslate -= 50;
  moveGallery.style.transform = `translate(${-startTranslate}%)`;
  console.log(startTranslate);
  if (startTranslate === 0) {
    rightArrow.style.display = 'none';
  }
};

leftArrow.addEventListener('click', moveLeftGallery);
rightArrow.addEventListener('click', moveRightGallery);
