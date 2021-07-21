"use sctrict";

let menuButton = document.querySelector(".menu-button"),
  navbarMenu = document.querySelector(".navbar-menu");

menuButton.addEventListener("click", () => {
  navbarMenu.classList.toggle("navbar-menu--visible");
  menuButton.classList.toggle("menu-button--active");
});

//Инициализация слайдера отеля
const hotelSwiper = new Swiper(".hotel-slider", {
  loop: true,
  navigation: {
    nextEl: ".hotel-slider__button--next",
    prevEl: ".hotel-slider__button--prev",
  },
  grabCursor: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  keyboard: {
    enabled: true,
  },
});

// Инициализация слайдера с отзывами
const reviewsSwiper = new Swiper(".reviews-slider", {
  loop: true,
  navigation: {
    nextEl: ".reviews-slider__button--next",
    prevEl: ".reviews-slider__button--prev",
  },
});

//Инициализация карты
ymaps.ready(init);

function init() {
  // Создание карты.
  let myMap = new ymaps.Map(
    "map",
    {
      center: [7.8381759, 98.29881076],
      zoom: 17,
      controls: ["smallMapDefaultSet"],
    },
    {
      // Ограничение области карты
      restrictMapArea: [
        [7.86936196, 98.2785118],
        [7.8028573, 98.31533317],
      ],
    }
  );
  // Создание точки на карте
  myMap.geoObjects.add(
    new ymaps.Placemark(
      [7.8381759, 98.29881076],
      {
        balloonContent: "GRAND HILTON HOTEL",
        iconCaption: "HILTON",
      },
      {
        preset: "islands#blueCircleDotIconWithCaption",
        iconCaptionMaxWidth: "50",
      }
    )
  );
}

// Создание параллакс эффекта для блока newsletter
$(".newsletter").parallax({
  imageSrc: "img/newsletter/newsletter-bg.jpeg",
  speed: 0.4,
});
