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

let imageArray = [];
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

let decorations = [
  {
    id: 'image-001',
    src: '../images/decorations/1-Teapot-Stack.jpg',
    alt: 'White Dahlia in Vintage Jug | Table Centrepieces',
  },
  {
    id: 'image-002',
    src: '../images/decorations/2-Mushrooms.jpg',
    alt: 'Grand Candle Trio | Table Centrepieces',
  },
  {
    id: 'image-003',
    src: '../images/decorations/3-Yellow-Jug-1a.jpg',
    alt: 'White & Pink Rose in Vintage Jug | Table Centrepieces',
  },
  {
    id: 'image-004',
    src: '../images/decorations/4-Anemone.jpg',
    alt: 'Large Peony Birdcage | Table Centrepieces',
  },
  {
    id: 'image-005',
    src: '../images/decorations/5-Butterfly-teapot-4a.jpg',
    alt: 'Vintage Tea Cup and Pot Tower | Table Centrepieces',
  },
  {
    id: 'image-006',
    src: '../images/decorations/6-Large-Log.jpg',
    alt: 'Small Hydrangea Birdcage | Table Centrepieces',
  },
  {
    id: 'image-007',
    src: '../images/decorations/7-Blue-Jug-3a.jpg',
    alt: 'Vintage Tea Cup | Table Centrepieces',
  },
  {
    id: 'image-008',
    src: '../images/decorations/8-Peony.jpg',
    alt: 'Anenomy Wreath with Water | Table Centrepieces',
  },
  {
    id: 'image-009',
    src: '../images/decorations/9-Two-tier-teacup-5a.jpg',
    alt: 'Vintage Afternoon Tea | Table Centrepieces',
  },
  {
    id: 'image-010',
    src: '../images/decorations/10-hoop.jpg',
    alt: 'Spring Vintage Wedding | Table Centrepieces',
  },
  {
    id: 'image-011',
    src: '../images/decorations/11-White-flower.jpg',
    alt: 'Ivy Wrapped Candle Arrangement | Table Centrepieces',
  },
  {
    id: 'image-012',
    src: '../images/decorations/12-small-cage.jpg',
    alt: 'Autumn Seed & Flower Wreath | Table Centrepieces',
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
    )
    .join(' ')}
      `;
}

function determinePage() {
  let urlPathArray = window.location.pathname.split('/');

  if (urlPathArray.includes('favours')) {
    imageArray = favours;
  } else if (urlPathArray.includes('decorations')) {
    imageArray = decorations;
  }

  let galleryContainer = document.getElementById('galleryContainer');
  let markup = drawGallery(imageArray);

  galleryContainer.innerHTML = markup;
}

determinePage();
