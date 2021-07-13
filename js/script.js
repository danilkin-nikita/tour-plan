"use sctrict";

const hotelSwiper = new Swiper(".hotel-slider", {
  loop: true,
  navigation: {
    nextEl: ".hotel-slider__button--next",
    prevEl: ".hotel-slider__button--prev",
  },
  grabCursor: true,
  autoplay: {
    delay: 5000,
  },
  keyboard: {
    enabled: true,
  },
});
