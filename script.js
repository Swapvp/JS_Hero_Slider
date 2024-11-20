
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

// Function to show the current slide
function showSlide(index) {
  // Ensure the index wraps around
  // console.log(slides.length);
  if (index >= slides.length) currentSlide = 0;
  if (index < 0) currentSlide = slides.length - 1;

  // Update active slide and dot
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(-${currentSlide * 100}%)`;
    slide.classList.toggle("active", i === currentSlide);
    dots[i].classList.toggle("active", i === currentSlide);
  });
}

// Event listeners for buttons
nextButton.addEventListener("click", () => {
  currentSlide++;
  showSlide(currentSlide);
});

prevButton.addEventListener("click", () => {
  currentSlide--;
  showSlide(currentSlide);
});

// Event listeners for dots
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});

// Auto-slide every 5 seconds
setInterval(() => {
  currentSlide++;
  showSlide(currentSlide);
}, 5000);
