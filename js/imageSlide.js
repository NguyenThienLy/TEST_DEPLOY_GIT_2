let slideIndex = 0;
showSlides();

function showSlides() {
  let i = 0;
  let slides = document.getElementsByClassName("images-slide__content");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "flex";
  setTimeout(showSlides, 5000);
}
