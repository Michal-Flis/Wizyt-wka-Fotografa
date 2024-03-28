const title = document.querySelector('.gallery-title');
const galleryPhoto = document.querySelector('.wrapper-gallery');
const sessionTitle = document.querySelector('.session-title');
const sessionPhotos = [...document.querySelectorAll('.session-category')];
const sessionParagraphs = [...document.querySelectorAll('.category')];
const sessionDescriptions = [...document.querySelectorAll('.description')];

const heightSectionGallery = galleryPhoto.clientHeight;
const heightSessionTitle = sessionTitle.clientHeight;
const heightTitle = sessionTitle.offsetTop;

const sumTitle = heightSessionTitle + heightTitle - 600;
const sumPhotoOne =
  sessionPhotos[0].clientHeight + sessionPhotos[0].offsetTop - 700;
const sumPhotoTwo =
  sessionPhotos[1].clientHeight + sessionPhotos[1].offsetTop - 800;
const sumPhotoThree =
  sessionPhotos[2].clientHeight + sessionPhotos[2].offsetTop - 900;
const sumPhotoFour =
  sessionPhotos[3].clientHeight + sessionPhotos[3].offsetTop - 1000;

const scrollAnimation = () => {
  let scrollWindow = window.scrollY;

  if (scrollWindow > heightSectionGallery) {
    galleryPhoto.classList.add('gallery-photo-move');
    title.classList.add('move-title');
  }

  if (scrollWindow > sumTitle) {
    sessionTitle.classList.add('animationTitle');
  }

  if (scrollWindow > sumPhotoOne) {
    sessionPhotos[0].classList.add('animationPhoto');
    sessionParagraphs[0].classList.add('animationParagraph');
    sessionDescriptions[0].classList.add('animationDescription');
  }

  if (scrollWindow > sumPhotoTwo) {
    sessionPhotos[1].classList.add('animationPhoto');
    sessionParagraphs[1].classList.add('animationParagraph');
    sessionDescriptions[1].classList.add('animationDescription');
  }

  if (scrollWindow > sumPhotoThree) {
    sessionPhotos[2].classList.add('animationPhoto');
    sessionParagraphs[2].classList.add('animationParagraph');
    sessionDescriptions[2].classList.add('animationDescription');
  }

  if (scrollWindow > sumPhotoFour) {
    sessionPhotos[3].classList.add('animationPhoto');
    sessionParagraphs[3].classList.add('animationParagraph');
    sessionDescriptions[3].classList.add('animationDescription');
  }
};

window.addEventListener('scroll', scrollAnimation);
