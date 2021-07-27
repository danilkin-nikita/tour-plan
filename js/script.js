"use sctrict";
// Скрипт для мобильного меню
const toogleMobileMenu = () => {
  let menuButton = document.querySelector(".menu-button"),
    navbarMenu = document.querySelector(".navbar-menu");

  menuButton.addEventListener("click", () => {
    navbarMenu.classList.toggle("navbar-menu--visible");
    menuButton.classList.toggle("menu-button--active");
    document.body.classList.toggle("scroll-menu");
  });
};

toogleMobileMenu();

// Инициализация слайдеров
const initSliders = () => {
  // Инициализация слайдера отеля
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
};

initSliders();

const init = () => {
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
};

//Инициализация карты
ymaps.ready(init);

// Открытие модального окна
const toogleModal = () => {
  const modalOverlay = document.querySelector(".modal__overlay"),
    modalDialog = document.querySelector(".modal__dialog");

  const openModal = () => {
    modalOverlay.classList.add("modal__overlay--visible");
    modalDialog.classList.add("modal__dialog--visible");
  };

  const closeModal = () => {
    modalOverlay.classList.remove("modal__overlay--visible");
    modalDialog.classList.remove("modal__dialog--visible");
  };

  document.addEventListener("click", (event) => {
    let target = event.target;

    if (target.matches('button[data-toggle="modal"]')) {
      openModal();
    }

    if (target.closest(".modal__close") || target.matches(".modal__overlay")) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (
      event.keyCode === 27 &&
      modalDialog.classList.contains("modal__dialog--visible")
    ) {
      closeModal();
    }
  });
};

toogleModal();

// Создание параллакс эффекта для блока newsletter
$(".newsletter").parallax({
  imageSrc: "img/newsletter/newsletter-bg.jpeg",
  speed: 0.4,
});

//Валидация форм
$(".send-form").each(function () {
  $(this).validate({
    errorClass: "invalid",
    messages: {
      name: {
        required: "Please specify your name",
        minlength: "Name must be at least 2 letters",
      },
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com",
      },
      phone: {
        required: "Please enter your phone number",
      },
    },
  });
});

//Подключение маски для телефона
$(".input[name=phone]").mask("+7 (000) 000-00-00");

AOS.init({
  disable: function () {
    var maxWidth = 1000;
    return window.innerWidth < maxWidth;
  },
});
