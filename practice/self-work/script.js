const ZERO = 0;
const MAX_SYMBOLS_IN_INPUT = 50;

let films = [];

const filmInputNode = document.getElementById('filmInput');
const addFilmButtonNode = document.getElementById('addButton');
const filmListNode = document.getElementById('filmList');
const filmItemNode = document.getElementById('filmItem');
const filmNameNode = document.getElementsByClassName('filmItem__name');
const validationMessageNode = document.getElementById('validationMessage');

// функция валидации заголовка
function checkInput() {
    const lengthString = filmInputNode.value.length;
    if (lengthString > ZERO && lengthString <= MAX_SYMBOLS_IN_INPUT) {
        validationMessageNode.innerText = `${MAX_SYMBOLS_IN_INPUT - filmInputNode.value.length}/50`;
    } else {
        validationMessageNode.innerText = `${MAX_SYMBOLS_IN_INPUT - filmInputNode.value.length}/50`;
    };
};

function checkButton() {
    const lengthString = filmInputNode.value.length;
    if (lengthString > ZERO && lengthString <= MAX_SYMBOLS_IN_INPUT) {
        addFilmButtonNode.disabled = false;
    } else {
        addFilmButtonNode.disabled = true;
    };
}

function initFilmList() {
    let filmName = filmNameNode;        
    console.log(filmName[0]);
    return;
}









function initInputHandler() {
    checkInput();
    checkButton();
};

filmInputNode.addEventListener('input', initInputHandler);
addFilmButtonNode.addEventListener('click', initFilmList);