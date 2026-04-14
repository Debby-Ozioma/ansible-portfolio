function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const carousel = document.getElementById("propertyCarousel");
let scrollAmount = 0;

function autoScroll() {
  scrollAmount += 0.1;
  if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
    scrollAmount = 0;
  }
  carousel.scrollTo({
    left: scrollAmount,
    behavior: "smooth",
  });
}

setInterval(autoScroll, 50); // lower = faster scroll
