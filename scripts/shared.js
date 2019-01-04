let mobileNavButton = document.querySelector('.mobile-nav__button');
let mobileNavButtonClose = document.querySelector('.mobile-nav__button--close');
let mobileNavMenu = document.querySelector('.mobile-nav__menu-holder');

console.dir(mobileNavButton);
console.dir(mobileNavMenu);

mobileNavButton.addEventListener('click', function(){
    mobileNavButton.classList.add('display');
    mobileNavMenu.classList.remove('display');
});

mobileNavButtonClose.addEventListener('click', function(){
    mobileNavButton.classList.remove('display');
    mobileNavMenu.classList.add('display');
});

const cats = [
    "images/decorations/eternal-posy-centrepiece-1.jpg",
    "images/decorations/anenomy-water-blur.jpg",
    "images/decorations/eternal-posy-centrepiece-2.jpg"
    ]
    
    const heroContainer = document.getElementById("hero-container");
    
    const cycleImages = (images, container, step) => {
        images.forEach((image, index) => (
        setTimeout(() => {
            container.style.background = `linear-gradient(
                0deg,
                rgba(108, 108, 108, 0.7),
                rgba(108, 108, 108, 0.7)
              ),url(${image}) bottom 50% left 40% / cover no-repeat border-box`
        }, step * (index + 1))
    ))
    setTimeout(() => cycleImages(images, container, step), step * images.length)
    }
    
    cycleImages(cats, heroContainer, 10000)