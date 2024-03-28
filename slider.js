const swiper = new Swiper(".swiperCatalog", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    375: {
      slidesPerView: 2,
      spaceBetween: 20,
      grid: {
        rows: 2,
      },
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
      grid: {
        rows: 1,
      },
    },
    1199: {
      slidesPerView: 4,
      spaceBetween: 20,
      grid: {
        rows: 1,
      },
    },
    1650: {
      slidesPerView: 4,
      spaceBetween: 20,
      grid: {
        rows: 1,
      },
    },
  },
  // Настройки адаптации под разные размеры экранов
});
const mySwiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    376: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 2,
    },
  },
});
const mySwiper2 = new Swiper(".mySwiperRecomendaytion", {
  slidesPerView: 5,
  spaceBetween: 10,
  loop: true,
  breakpoints: {
    376: {
      slidesPerView: 4,
    },
    575: {
      slidesPerView: 5,
    },
    767: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 5,
    },
  },
});

document.querySelector(".humburger").addEventListener("click", () => {
  document.querySelector(".humburger").classList.toggle("is-active-menu");
  document.querySelector(".menu__mobile").classList.toggle("is-active-menu");
});

document.querySelector(".menu__mobile").addEventListener("click", (e) => {
  if (e.target.closest(".menu__mobile")) {
    document.querySelector(".humburger").classList.remove("is-active-menu");
    document.querySelector(".menu__mobile").classList.remove("is-active-menu");
  }
});
