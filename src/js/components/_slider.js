import Swiper, { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';

const swiperAbout = new Swiper('.slider__about', {
  slidesPerView: 1,
  spaceBetween: 16,
  speed: 1400,
  autoplay: {
    delay: 6000,
  },
  centeredSlides: true,
  modules: [Scrollbar, Pagination, Autoplay],
  draggable: true,
  grabCursor: true,
  pagination: {
    el: '.slider__about .slider__pagination',
    clickable: true,
  },

  // breakpoints: {
  //   769: {
  //     slidesPerView: 2,
  //     slidesPerGroup: 2,
  //   },
  // },
});