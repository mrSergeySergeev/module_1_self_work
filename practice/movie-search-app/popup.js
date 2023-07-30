const POPUP_OPENED_CLASSNAME = 'popup-open';
const BODY_FIXED_CLASSNAME = 'body-fixed';

const bodyNode = document.querySelector('body');
const popupNode = document.getElementById('popup');
const btnOpenNode = document.getElementById('limitChangeButton');
const popupContentNode = document.getElementById('popupContent')
const btnCloseNode = document.getElementById('popupButtonClose');

btnOpenNode.addEventListener('click', togglePopup);
btnCloseNode.addEventListener('click', togglePopup);

popupNode.addEventListener('click', (event) => {
    const isClickOutsideContent = !event.composedPath().includes(popupContentNode)

    if (isClickOutsideContent) {
        togglePopup();
    }
})

function togglePopup() {
    popupNode.classList.toggle(POPUP_OPENED_CLASSNAME);
    bodyNode.classList.toggle(BODY_FIXED_CLASSNAME);
}