let checkBox = document.getElementById('yesCheck');

let hiddenFields = document.getElementById('hidden');

function showFields () {
    console.log ("checkbox checked!")
    if (checkBox.checked) {
        hiddenFields.style.display = "block";
    } 
    else {
        hiddenFields.style.display = "none";
    }
}

function loadMenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}