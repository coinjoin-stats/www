document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("containers");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close");
  
    container.addEventListener("click", function (e) {
      if (e.target.tagName === "IMG" && e.target.dataset.full) {
        lightbox.style.display = "flex";
        lightboxImg.src = e.target.dataset.full;
      }
    });
  
    closeBtn.addEventListener("click", () => {
      lightbox.style.display = "none";
    });
  
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) lightbox.style.display = "none";
    });
});