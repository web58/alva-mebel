import {
  isEscKey,
} from './utils.js';

const noHeroNode = document.querySelector( '.no-hero' );
const headerNode = document.querySelector( '.header-main' );
const headerModalNode = document.querySelector( '.header-modal' );
const MENU_ID = 'mobile-menu';
const BURGER_OPTIONS = {
  animationSpeed: 300,
  menuId: MENU_ID,
  isOpen: openMobileMenu,
  isClose: closeMobileMenu,
};
const siteBurger = new JustBurger( BURGER_OPTIONS );

function openMobileMenu() {
  document.documentElement.classList.add( 'is-open-modal' );
  headerNode.classList.add( 'header-main--is-open-menu' );
  headerModalNode.setAttribute( 'aria-hidden', 'false' );
}

function closeMobileMenu() {
  document.documentElement.classList.remove( 'is-open-modal' );
  headerNode.classList.remove( 'header-main--is-open-menu' );
  headerModalNode.setAttribute( 'aria-hidden', 'true' );
}

const closeMenuAfterClick = ( selectorNodes ) => {
  document.querySelectorAll( selectorNodes ).forEach( item => {
    item.addEventListener( 'click', () => {
      if ( window.matchMedia( '(max-width: 992px)' ).matches ) {
        siteBurger.close();
      }
    } );
  } );
};

const initHeaderMenu = () => {
  if ( !headerModalNode || !headerNode ) return;
  headerModalNode.id = MENU_ID;
  closeMenuAfterClick( '.header-nav a' );
  document.addEventListener( 'keydown', ( evt ) => {
    if ( isEscKey( evt ) && headerModalNode.getAttribute( 'aria-hidden' ) === 'false' ) {
      siteBurger.close();
    }
  } );
};

const observeSiteHeader = ( options ) => {
  const targetTopNode = document.querySelector( '#site-top' );

  if ( !targetTopNode ) return;

  const cb = ( entries ) => {
    entries.forEach( entry => {
      if ( !entry.isIntersecting ) {
        headerNode.classList.add( 'header-main--is-sticked' );
      } else {
        headerNode.classList.remove( 'header-main--is-sticked' );
      }
    } );
  };
  new IntersectionObserver( cb, options.Observer.Header ).observe( targetTopNode );
};

const setMarginTop = () => {
  if ( !headerNode || !noHeroNode ) return false;

  noHeroNode.style.marginTop = `${headerNode.offsetHeight}px`;
  return true;
};

const initNoHeroOffset = () => {
  if ( !setMarginTop() ) return;

  window.addEventListener( 'resize', setMarginTop );
};

const initHeaderSettings = ( options ) => {
  initHeaderMenu();
  observeSiteHeader( options );
  initNoHeroOffset();
};

export {
  initHeaderSettings
};
