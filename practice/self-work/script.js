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

// чекаем кнопку по длине строки инпута
function checkButton() {
    const lengthString = filmInputNode.value.length;
    if (lengthString > ZERO && lengthString <= MAX_SYMBOLS_IN_INPUT) {
        addFilmButtonNode.disabled = false;
    } else {
        addFilmButtonNode.disabled = true;
    };
}

// функция считывает фильмы, прописанные в html-разметке
function initHtmlFilmList() {
    let filmName = filmNameNode;        
    for (let i = 0; i < filmName.length; i++){
        console.log(filmName[i].outerText)
        filmName[i] = filmName[i].outerText;
        films.push(filmName[i].outerText);
        console.log(films);
    };

    return films;
}









function initInputHandler() {
    checkInput();
    checkButton();
};

filmInputNode.addEventListener('input', initInputHandler);
addFilmButtonNode.addEventListener('click', initHtmlFilmList);