export const Options = {
  SmoothScroll: {
    speed: 900,
    speedAsDuration: true,
    updateURL: false,
  },
  Modal: {
    linkAttributeName: false,
    catchFocus: true,
    closeOnEsc: true,
    backscroll: true,
  },
  Mask: {
    bodyMask: ' (___) ___ __ __',
  },
  ValidationErrors: {
    errorFieldCssClass: 'is-invalid',
    errorLabelStyle: {
      color: 'var(--error)',
      marginTop: '6px',
      fontSize: '12px',
      textAlign: 'left',
    },
  },
  Observer: {
    Header: {
      rootMargin: '5px',
      threshold: 1
    },
    ScrollTop: {
      rootMargin: '600px',
      threshold: 1,
    },
  },
  Requests: {
    HandlerURL: 'https://jsonplaceholder.typicode.com/posts',
  },
  Swiper: {
    Gallery: {
      slidesPerView: 1,
      spaceBetween: 30,
      watchSlidesProgress: true,
      navigation: {
        prevEl: '.gallery__controls [data-to-slide="prev"]',
        nextEl: '.gallery__controls [data-to-slide="next"]',
      },
      pagination: {
        el: '.gallery__pagination',
        clickable: false,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
        1600: {
          slidesPerView: 4,
        },
      },
    },
    Product: {
      slidesPerView: 1,
      spaceBetween: 0,
      watchSlidesProgress: true,
      navigation: {
        prevEl: '.catalog-details__controls [data-to-slide="prev"]',
        nextEl: '.catalog-details__controls [data-to-slide="next"]',
      },
      pagination: {
        el: '.catalog-details__pagination',
        clickable: false,
      },
    },
  }
};
