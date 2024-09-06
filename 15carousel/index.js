let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide");
const totalSlides = slides.length;

function moveSlide(direction) {
  currentSlide += direction;

  if (currentSlide < 0) {
    currentSlide = totalSlides - 1; // Go to last slide if on the first
  } else if (currentSlide >= totalSlides) {
    currentSlide = 0; // Go to the first slide if on the last
  }

  const offset = -currentSlide * 100; // Calculate offset for sliding
  document.querySelector(
    ".carousel"
  ).style.transform = `translateX(${offset}%)`;
}
