let mobileNavButton = document.querySelector('.mobile-nav__button');
let mobileNavButtonClose = document.querySelector('.mobile-nav__button--close');
let mobileNavMenu = document.querySelector('.mobile-nav__menu-holder');

mobileNavButton.addEventListener('click', function(){
    mobileNavButton.classList.add('display');
    mobileNavMenu.classList.remove('display');
});

mobileNavButtonClose.addEventListener('click', function(){
    mobileNavButton.classList.remove('display');
    mobileNavMenu.classList.add('display');
});

let imageModal = document.querySelector('.gallery-modal');
let imageModalClose = document.querySelector('.gallery-modal__close');
let galleryItem = document.querySelector('.gallery__item')

galleryItem.addEventListener('click', function(){
    imageModal.classList.remove('hidden');
})

imageModalClose.addEventListener('click', function(){
    imageModal.classList.add('hidden');
})