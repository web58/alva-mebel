const catalogTabsNode = document.querySelector( '[data-tabs="mp-catalog"]' );

export const initCatalogTabs = () => {
  if ( !catalogTabsNode ) return;
  const catalogTabs = new JustTabs( 'mp-catalog' );

  for ( let i = 0; i < catalogTabs.tabsPanels.length; i++ ) {
    new Swiper( catalogTabs.tabsPanels[ i ].querySelector( '.catalog-slider' ), {
      slidesPerView: 2,
      spaceBetween: 10,
      watchSlidesProgress: true,
      navigation: {
        prevEl: catalogTabs.tabsPanels[ i ].querySelector( '.catalog-slider [data-to-slide="prev"]' ),
        nextEl: catalogTabs.tabsPanels[ i ].querySelector( '.catalog-slider [data-to-slide="next"]' ),
      },
      pagination: {
        el: catalogTabs.tabsPanels[ i ].querySelector( '.slider__pagination' ),
        clickable: false,
      },
      breakpoints: {
        768: {
          spaceBetween: 30,
          slidesPerView: 3,
        },
        1600: {
          slidesPerView: 4,
        },
      },
    } );
  }
};
