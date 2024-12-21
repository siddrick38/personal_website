// array to hold slide indexes for each slideshow
let slideIndexes = [1, 1, 1, 1];

window.onload = function () {
  for (let i = 1; i <= 4; i++) {
    showSlides(slideIndexes[i - 1], i);
  }
};

function showSlides(n, num) {
  let className = "slides" + String(num);
  let slides = document.getElementsByClassName(className);

  if (n > slides.length) {
    slideIndexes[num - 1] = 1;
  }
  if (n < 1) {
    slideIndexes[num - 1] = slides.length;
  }

  for (let x = 0; x < slides.length; ++x) {
    slides[x].style.display = "none";
  }

  slides[slideIndexes[num - 1] - 1].style.display = "block";
}

function updateSlides(n, num) {
  slideIndexes[num - 1] += n;
  showSlides(slideIndexes[num - 1], num);
}
