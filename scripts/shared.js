let mobileNavButton = document.querySelector('.mobile-nav__button');
let mobileNavButtonClose = document.querySelector('.mobile-nav__button--close');
let mobileNavMenu = document.querySelector('.mobile-nav__menu-holder');

mobileNavButton.addEventListener('click', function () {
  mobileNavButton.classList.add('display');
  mobileNavMenu.classList.remove('display');
});

mobileNavButtonClose.addEventListener('click', function () {
  mobileNavButton.classList.remove('display');
  mobileNavMenu.classList.add('display');
});

document.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'Escape':
    case 'Esc':
      window.location.hash = '#close';
      break;

    case 'Left':
    case 'ArrowLeft':
      const currentEl = document.querySelector(window.location.hash);
      if (!currentEl) return;

      const prevEl = currentEl.previousElementSibling;
      if (!prevEl) return;

      window.location.hash = `#${prevEl.id}`;

      break;

    case 'Right':
    case 'ArrowRight':
      const currentEl2 = document.querySelector(window.location.hash);
      if (!currentEl2) return;

      const nextEl = currentEl2.nextElementSibling;
      if (!nextEl) return;

      window.location.hash = `#${nextEl.id}`;

      break;

    default:
      return;
  }
});

let favours = [
  {
    id: 'image-001',
    src: '../images/favours/eternal-posy-favour-1.jpg',
    alt: 'Butterfly Seed Bottle | Wedding Favour',
  },
  {
    id: 'image-002',
    src: '../images/favours/eternal-posy-favour-2.jpg',
    alt: 'Seed Bottle Assortment | Wedding Favour',
  },
  {
    id: 'image-003',
    src: '../images/favours/eternal-posy-favour-3.jpg',
    alt: 'Seed Bottle Assortment | Wedding Favour',
  },
  {
    id: 'image-004',
    src: '../images/favours/eternal-posy-favour-4.jpg',
    alt: 'Seed Bottle Assortment | Wedding Favour',
  },
  {
    id: 'image-005',
    src: '../images/favours/eternal-posy-favour-5.jpg',
    alt: 'Seed Bottle Assortment | Wedding Favour',
  },
  {
    id: 'image-006',
    src: '../images/favours/eternal-posy-favour-6.jpg',
    alt: 'Seed Bottle Assortment | Wedding Favour',
  },
  {
    id: 'image-007',
    src: '../images/favours/eternal-posy-favour-7.jpg',
    alt: 'Seed Bottle Assortment | Wedding Favour',
  },
  {
    id: 'image-008',
    src: '../images/favours/eternal-posy-favour-8.jpg',
    alt: 'Seed Bottle Assortment | Wedding Favour',
  },
  {
    id: 'image-009',
    src: '../images/favours/eternal-posy-favour-9.jpg',
    alt: 'Seed Bottle Assortment | Wedding Favour',
  },
  {
    id: 'image-010',
    src: '../images/favours/eternal-posy-favour-10.jpg',
    alt: 'Seed Bottle Assortment | Wedding Favour',
  },
  {
    id: 'image-011',
    src: '../images/favours/eternal-posy-favour-11.jpg',
    alt: 'Seed Bottle Assortment | Wedding Favour',
  },
  {
    id: 'image-012',
    src: '../images/favours/eternal-posy-favour-12.jpg',
    alt: 'Seed Bottle Assortment | Wedding Favour',
  },  
];

function drawGallery(imageArray) {
  return `
  ${imageArray
    .map(
      (image) =>
        `
          <div id="${image.id}" class="gallery__item">
              <a href="#${image.id}" class="zoomin" title="Zoom In"><img
                  src="${image.src}"
                  alt="${image.alt}" loading="lazy"
              /></a>
      <a href="#close" class="zoomout" title="Zoom Out" autofocus="true"><img
          src="${image.src}"
          alt="${image.alt}" loading="lazy"
        /></a>
        </div>
      `
    ).join(' ')
    }
      `;
}

let galleryContainer = document.getElementById('galleryContainer');
let markup = drawGallery(favours);

galleryContainer.innerHTML = markup;
