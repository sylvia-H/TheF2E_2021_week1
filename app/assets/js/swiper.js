// 首頁 - Hero Banner
const heroSwiper = new Swiper(".heroSwiper", {
  cssMode: true,
  loop: true,
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

// 首頁 - 熱門打卡景點
const scenicSpotSwiper = new Swiper ('.scenicSpotSwiper', {
  slidesPerView: 1.6,
  spaceBetween: 16,
  grid: {
      rows: 1,
      fill: 'row',
  },
  breakpoints:{
    992: {
        slidesPerView: 4,
        spaceBetween: 30,
        grid: {
            rows: 1,
            fill: 'row',
        },
    },
    768: {
        slidesPerView: 2.5,
        spaceBetween: 30,
        grid: {
            rows: 1,
            fill: 'row',
        },
    },
  }
});

// 首頁 - 一再回訪美食
const foodSpotSwiper = new Swiper ('.foodSpotSwiper', {
  slidesPerView: 1.6,
  spaceBetween: 16,
  grid: {
      rows: 1,
      fill: 'row',
  },
  breakpoints:{
    992: {
        slidesPerView: 4,
        spaceBetween: 30,
        grid: {
            rows: 1,
            fill: 'row',
        },
    },
    768: {
        slidesPerView: 2.5,
        spaceBetween: 30,
        grid: {
            rows: 1,
            fill: 'row',
        },
    },
  }
});

// 探索景點_結果頁面 - Hero Banner
const scenicSpot_heroSwiper = new Swiper(".scenicSpot_heroSwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});
