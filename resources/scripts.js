// document and window are browser-provided javascript elements
document.addEventListener('DOMContentLoaded', (event) => {
  console.log("HI MOM") 
  showSlides(1)

  var galleryButton = document.getElementById("gallery-button");
  var aboutButton = document.getElementById("about-button");
  var whereIsButton = document.getElementById("where-is-macsot-button");

  var aboutPage = document.getElementById("about-page");
  var gallery = document.getElementById("gallery");
  var whereIs = document.getElementById("where-is-macsot");

  galleryButton.addEventListener('click', (event) => {
    console.log("HI DAD")
    gallery.style.display = "flex"; 
    aboutPage.style.display = "none";
    whereIs.style.display = "none";
  });

  aboutButton.addEventListener('click', (event) => {
    console.log("HI SON") 
    gallery.style.display = "none"; 
    whereIs.style.display = "none";
    aboutPage.style.display = "flex";
  });

  whereIsButton.addEventListener('click', (event) => {
    console.log("HI MACSOT") 
    gallery.style.display = "none"; 
    aboutPage.style.display = "none";
    whereIs.style.display = "flex";
  });
});

// *****  Slideshow stuff *****
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
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
// *****  End slideshow stuff *****