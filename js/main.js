$(document).ready(function () {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    autoHeight: true,

    // Navigation arrows
    navigation: {
      nextEl: ".popular-slider_button--next",
      prevEl: ".popular-slider_button--prev",
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });
});
