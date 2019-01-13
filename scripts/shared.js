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

