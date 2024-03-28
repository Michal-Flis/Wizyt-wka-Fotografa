const photos = document.querySelectorAll('.photo');
const blurDiv = document.querySelector('.wrapper');
const imgs = [...document.querySelectorAll('img')];
const body = document.querySelector('body');

// Create New Element

const enlarge = document.createElement('p');
const divPopap = document.createElement('div');
const maxSizeImg = document.createElement('img');
const ground = document.createElement('span');
const paragraph = document.createElement('p');

// Add Class
maxSizeImg.classList.add('pop-up');
paragraph.classList.add('close-photo');

// Added Element for Photo

for (const photo of photos) {
  photo.addEventListener('mouseenter', () => {
    enlarge.textContent = 'Kliknij!';
    enlarge.style.position = 'absolute';
    enlarge.style.top = '50%';
    enlarge.style.left = '50%';
    enlarge.style.transform = 'translate(-50%, -50%)';
    enlarge.style.fontSize = '50px';
    enlarge.style.color = '#fff';
    enlarge.style.fontWeight = 'bold';
    enlarge.style.zIndex = '2';
    enlarge.style.cursor = 'pointer';

    photo.appendChild(enlarge);
  });

  photo.addEventListener('mouseleave', () => {
    photo.removeChild(enlarge);
  });
}

// Added Max Size Photo for Pop-up

for (const img of imgs) {
  img.addEventListener('click', () => {
    blurDiv.style.filter = 'blur(5px)';

    const srcPhoto = img.getAttribute('src');
    maxSizeImg.src = srcPhoto;

    divPopap.appendChild(maxSizeImg);
    divPopap.classList.add('active');

    // Styles for Elements

    // Styles 'Span'
    ground.style.display = 'inline-block';
    ground.style.position = 'absolute';
    ground.style.top = '0';
    ground.style.left = '0';
    ground.style.width = '100%';
    ground.style.height = '100%';
    ground.style.backgroundColor = '#000';
    ground.style.opacity = '.7';

    // Styles 'div'
    divPopap.style.width = '95%';
    divPopap.style.height = '95%';
    divPopap.style.position = 'fixed';
    divPopap.style.top = '50%';
    divPopap.style.left = '50%';
    divPopap.style.transform = 'translate(-50%, -50%)';
    divPopap.style.zIndex = '2';

    //Styles 'Img'
    maxSizeImg.style.position = 'absolute';
    maxSizeImg.style.top = '50%';
    maxSizeImg.style.left = '50%';
    maxSizeImg.style.transform = 'translate(-50%, -50%)';
    maxSizeImg.style.width = '100%';
    maxSizeImg.style.height = '100%';
    maxSizeImg.style.cursor = 'default';
    maxSizeImg.style.margin = '0 auto';
    maxSizeImg.classList.add('active');

    // Styles 'p'
    paragraph.textContent = 'X';
    paragraph.style.position = 'absolute';
    paragraph.style.top = '10px';
    paragraph.style.right = '15px';
    paragraph.style.fontSize = '30px';
    paragraph.style.fontFamily = 'sans-serif';
    paragraph.style.fontWeight = 'bold';
    paragraph.style.border = '3px solid #fff';
    paragraph.style.borderRadius = '50%';
    paragraph.style.color = '#fff';
    paragraph.style.padding = '5px 10px';
    paragraph.style.cursor = 'pointer';

    body.appendChild(ground);
    body.appendChild(divPopap);
    divPopap.appendChild(paragraph);
  });
}

const closeWindow = () => {
  body.removeChild(ground);
  body.removeChild(divPopap);
  blurDiv.style.filter = 'blur(0)';
};

paragraph.addEventListener('click', closeWindow);
