const posts = [];

const titleInputNode = document.getElementById('postTitleInput');
const descriptionInputNode = document.getElementById('postDescriptionInput');
const postsListNode = document.getElementById('postList');

const newPostButtonNode = document.getElementById('newPostButton');

// про popup--------------------------------------------------

const POPUP_OPENED_CLASSNAME = 'popup-open';
const BODY_FIXED_CLASSNAME = 'body-fixed';

const bodyNode = document.querySelector('body');
const popupNode = document.getElementById('popup');
const popupContentNode = document.querySelector('.js-popupContent');
const btnCloseNode = document.getElementById('popupClose');

const popupContentCheckTitleNode = document.getElementById('popupContentCheckTitle');
const popupContentCheckDescriptionNode = document.getElementById('popupContentCheckDescription');
const popupContentMoreTitleNode = document.getElementById('popupContentMoreTitle')
const popupContentMoreDescriptionNode = document.getElementById('popupContentMoreDescription');