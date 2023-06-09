const INIT_SUM_SYMBOLS = 0;
const MAX_SYMBOLS_IN_INPUT = 50;

let films = [];
// { id: null, filmName: null, done: null, delete: null, }
const filmInputNode = document.getElementById('filmInput');
const addFilmButtonNode = document.getElementById('addButton');
const filmListNode = document.getElementById('filmList');
const filmNameNode = document.getElementsByClassName('filmItem__name');
const validationMessageNode = document.getElementById('validationMessage');
const filmItemNode = document.getElementById('filmItem');
