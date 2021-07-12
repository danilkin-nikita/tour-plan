"use sctrict";

const swiper = new Swiper(".swiper-container", {
  loop: true,
  navigation: {
    nextEl: ".slider-button--next",
    prevEl: ".slider-button--prev",
  },
  grabCursor: true,
  autoplay: {
    delay: 5000,
  },
  keyboard: {
    enabled: true,
  },
});
