document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("containers");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".close");
  const leftArrow = document.querySelector(".arrow.left");
  const rightArrow = document.querySelector(".arrow.right");

  let currentIndex = -1;
  let images = [];

  function openLightbox(index) {
    currentIndex = index;
    lightboxImg.src = images[currentIndex].dataset.full;
    lightbox.style.display = "flex";
  }

  function showNextImage() {
    if (images.length === 0) return;
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImg.src = images[currentIndex].dataset.full;
  }

  function showPrevImage() {
    if (images.length === 0) return;
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentIndex].dataset.full;
  }

  container.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG" && e.target.dataset.full) {
      images = Array.from(container.querySelectorAll("img[data-full]"));
      const index = images.indexOf(e.target);
      if (index !== -1) openLightbox(index);
    }
  });

  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) lightbox.style.display = "none";
  });

  rightArrow.addEventListener("click", showNextImage);
  leftArrow.addEventListener("click", showPrevImage);

  document.addEventListener("keydown", (e) => {
    if (lightbox.style.display === "flex") {
      if (e.key === "ArrowRight") showNextImage();
      if (e.key === "ArrowLeft") showPrevImage();
      if (e.key === "Escape") lightbox.style.display = "none";
    }
  });
});