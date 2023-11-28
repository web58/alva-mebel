import {
  Options,
} from './modules/options.js';

import {
  iosVhFix,
  initSlider,
} from './modules/utils.js';

import {
  initHeaderSettings
} from './modules/header.js';

import {
  initModals,
} from './modules/modal.js';

import {
  initScrollTop
} from './modules/scroll-top.js';

import {
  validateForms
} from './modules/validate.js';

import {
  initCatalogTabs
} from './modules/catalog.js';

import {
  initYTubeVideo
} from './modules/yt-video.js';

document.addEventListener( 'DOMContentLoaded', () => {
  iosVhFix();
  window.addEventListener( 'load', () => {
    initHeaderSettings( Options );
    initModals();
    initScrollTop();
    validateForms();
    initCatalogTabs();
    initYTubeVideo();
    initSlider( '.gallery__slider', Options.Swiper.Gallery );
    initSlider( '.catalog-details__slider', Options.Swiper.Product );
  } );
} );
