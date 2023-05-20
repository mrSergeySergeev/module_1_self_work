const posts = [];

const titleInputNode = document.getElementById('postTitleInput');
const descriptionInputNode = document.getElementById('postDescriptionInput');
const postsListNode = document.getElementById('postList');

const newPostButtonNode = document.getElementById('newPostButton');

// про popup--------------------------------------------------

const POPUP_OPENED_CLASSNAME = 'popup-open';
const BODY_FIXED_CLASSNAME = 'body-fixed';
const POPUP_TITLE_ACTIVE = 'popup__title-active';

const bodyNode = document.querySelector('body');
const popupNode = document.getElementById('popup');
const popupContentNode = document.getElementById('popupContent');
const btnCloseNode = document.getElementById('popupCloseButton');

const validationMessageNode = document.getElementsByClassName('popup__title')

console.log(validationMessageNode);