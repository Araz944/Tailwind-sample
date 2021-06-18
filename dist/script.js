const menu = document.getElementById("hamburgerMenu");

function clickButton() {
  const toggleClass = document.getElementById("navMenu");
  toggleClass.classList.toggle("hidden");
}

// Swiper.js
const swiper = new Swiper(".swiper-container", {
  // Optional parameters

  // effect: "cube",
  // cubeEffect: {
  //   shadow: true,
  //   slideShadows: true,
  //   shadowOffset: 20,
  //   shadowScale: 0.94,
  // },
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  speed: 1000,
  parallax: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
