const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const auto = false;
const intervalTime = 5000;
let slideInterval;
console.log(slides);

const nextSlide = () => {
  const current = document.querySelector(".current");
  current.classList.remove("current");

  // Check for next slide
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add("current");
  } else {
    // Add current to start
    slides[0].classList.add("current");
  }

  setTimeout(() => {
    current.classList.remove("current");
  });
};

const prevSlide = () => {
  const current = document.querySelector(".current");
  console.log(current);

  current.classList.remove("current");

  // Check for pervious slide
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add("current");
  } else {
    // Add current to start
    slides[slides.length - 1].classList.add("current");
  }
  setTimeout(() => {
    current.classList.remove("current");
  });
};

// Button Events
next.addEventListener("click", e => {
  nextSlide();
});
prev.addEventListener("click", e => {
  prevSlide();
});
