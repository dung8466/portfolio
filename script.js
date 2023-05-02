toogleThemeBtn = document.querySelector("#theme-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

toogleThemeBtn.addEventListener("click", function () {
  // If the OS is set to dark mode...
  if (prefersDarkScheme.matches) {
    // ...then apply the .light-theme class to override those styles
    document.body.classList.toggle("light-theme");
    // Otherwise...
  } else {
    // ...apply the .dark-theme class to override the default light styles
    document.body.classList.toggle("dark-theme");
  }
});

let sliderImages = document.querySelectorAll(".projectCard");
let nextBtn = document.querySelector(".next");
let preBtn = document.querySelector(".pre");
let current = 0;

// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

// Initial slide
function startSlide() {
  reset();
  sliderImages[0].style.display = "grid";
}

// Show previous
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "grid";
  current--;
}

// Show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "grid";
  current++;
}

// Left arrow click
preBtn.addEventListener("click", function () {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// Right arrow click
nextBtn.addEventListener("click", function () {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();
