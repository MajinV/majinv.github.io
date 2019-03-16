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

// let imageModal = document.querySelector('.gallery-modal');
// let imageModalClose = document.querySelector('.gallery-modal__close');
// let galleryItem = document.getElementsByClassName('gallery__item')

// galleryItem.addEventListener('click', function(){
//     imageModal.classList.remove('hidden');
// })

// imageModalClose.addEventListener('click', function(){
//     imageModal.classList.add('hidden');
// })


// Open the Modal
function openModal() {
    document.getElementById('modal').style.display = "flex";
  }
  
  // Close the Modal
  function closeModal() {
    document.getElementById('modal').style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("gallery-modal__container");
    //var dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("gallery-modal__info-desc");
    console.log(captionText);
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    //for (i = 0; i < dots.length; i++) {
    //  dots[i].className = dots[i].className.replace(" active", "");
    //}
    captionText.innerHTML = slides[slideIndex-1].alt;
    slides[slideIndex-1].style.display = "flex";
    //dots[slideIndex-1].className += " active";

    
  }