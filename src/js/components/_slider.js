import Swiper, { Navigation, Pagination, Scrollbar, Autoplay, Thumbs } from 'swiper';

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
});

const swiperTours = new Swiper('.slider__tours', {
  slidesPerView: 1,
  spaceBetween: 16,
  speed: 1400,
  autoplay: {
    delay: 6000,
  },
  centeredSlides: true,
  modules: [Navigation, Scrollbar, Autoplay],
  draggable: true,
  grabCursor: true,
  navigation: {
    nextEl: '.slider__btn--next',
    prevEl: '.slider__btn--prev',
  },
});

const swiperDiscoverMini = new Swiper(".slider__discover--thumb", {
  spaceBetween: 0,
  freeMode: true,
  watchSlidesProgress: true,
  loop: true,
  autoplay: true,
  breakpoints: {
    1281: {
      slidesPerView: 6,
    },
    768: {
      slidesPerView: 4,
    },
    576: {
      slidesPerView: 3,
    },
    1: {
      slidesPerView: 2,
    }
  },
});

const swiperDiscover = new Swiper('.slider__discover', {
  slidesPerView: 1,
  spaceBetween: 16,
  speed: 1400,
  autoplay: {
    delay: 6000,
  },
  centeredSlides: true,
  modules: [Navigation, Scrollbar, Autoplay, Thumbs],
  draggable: true,
  grabCursor: true,
  navigation: {
    nextEl: '.slider__btn--next',
    prevEl: '.slider__btn--prev',
  },
  thumbs: {
    swiper: swiperDiscoverMini,
  }
});