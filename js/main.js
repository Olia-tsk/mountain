$(document).ready(function () {
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });

  const slider = new Swiper(".tours-slider", {
    direction: "horizontal",
    loop: true,

    effect: "fade",

    navigation: {
      nextEl: ".tours-slide-next",
      prevEl: ".tours-slide-prev",
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });
});
