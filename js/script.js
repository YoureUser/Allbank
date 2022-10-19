const swiper1 = new Swiper(".header-swiper", {
  speed: 400,
  spaceBetween: 100,
  loop: true,
  autoplay: {
    delay: 5000,
  },
});

const swiper2 = new Swiper(".bank-swiper", {
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 40,
  speed: 400,

  loop: true,
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    320: {},

    480: {},
    767: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
      direction: "horizontal",
    },
    992: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 20,
      direction: "horizontal",
    },
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 40,
      direction: "horizontal",
    },
    1400: {
      siderPerView: 3,
      siderPerGroup: 1,
      spaceBetween: 40,
      direction: "horizontal",
    },
  },
});

// this is functional the dropdown
$(document).ready(function () {
  $(".menu__arrow").click(function (event) {
    $(".menu__arrow,.currency-submenu__city").toggleClass("active");
  });
});
