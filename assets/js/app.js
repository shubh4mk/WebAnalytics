document.addEventListener('DOMContentLoaded', function() {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.sliderItem');
  const totalSlides = slides.length;

  function showSlide(index) {
      slides.forEach((slide, i) => {
          slide.style.transform = `translateX(${(i - index) * 100}%)`;
      });
  }

  function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
  }

  setInterval(nextSlide, 3000); // Change slide every 3 seconds

  // Initial display
  showSlide(currentSlide);
});
