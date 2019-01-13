const bgimages = [
  "images/banner/eternal-posy-vintage-jug.jpg",
  "images/banner/eternal-posy-flower-hair-piece.jpg",
  "images/banner/eternal-posy-candlestick-centrepiece.jpg",
  "images/banner/eternal-posy-flower-hair-vine.jpg",
  "images/banner/eternal-posy-seed-favours.jpg",
  "images/banner/eternal-posy-autumn-rose-centrepiece.jpg",
  "images/banner/eternal-posy-summer-rose-centrepiece.jpg"
];

const heroContainer = document.getElementById("hero-container");

const cycleImages = (images, container, step) => {
  images.forEach((image, index) =>
    setTimeout(() => {
      container.style.background = `linear-gradient(
                0deg,
                rgba(108, 108, 108, 0.7),
                rgba(108, 108, 108, 0.7)
              ),url(${image}) bottom 50% left 40% / cover no-repeat border-box`;
    }, step * (index + 1))
  );
  setTimeout(() => cycleImages(images, container, step), step * images.length);
};

cycleImages(bgimages, heroContainer, 10000);