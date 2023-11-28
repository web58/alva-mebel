import {
  Options,
} from './options.js';

const simpleModal = new HystModal( Options.Modal );
const requestModal = new HystModal( Options.Modal );

const initModal = ( name = simpleModal, handler = 'data-hystmodal' ) => {
  name.config.linkAttributeName = handler;
  name.init();
};

const initModals = () => {
  initModal();
  initModal( requestModal, 'data-request-hystmodal' );
};

const setSubjectText = ( modal ) => {
  if ( modal.starter ) {
    const subjectNode = modal.openedWindow.querySelector( 'input[type="hidden"][data-subject]' );
    if ( subjectNode ) {
      subjectNode.value = modal.starter.textContent;
    }
  }
};

requestModal.config.beforeOpen = setSubjectText;

export {
  simpleModal,
  initModals,
};
