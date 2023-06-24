const INIT_SUM_SYMBOLS = 0;
const MAX_SYMBOLS_IN_INPUT = 50;

let films = [];
// { id: null, filmName: null, done: null, delete: null, }
const filmInputNode = document.getElementById('filmInput');
const addFilmButtonNode = document.getElementById('addButton');
const deleteAllButtonNode = document.getElementById('deleteAllButton');
const validationMessageNode = document.getElementById('validationMessage');

// функция валидации заголовка
const checkInput = () => {
    const lengthString = filmInputNode.value.length;
    if (lengthString > INIT_SUM_SYMBOLS && lengthString <= MAX_SYMBOLS_IN_INPUT) {
        validationMessageNode.innerText = `${MAX_SYMBOLS_IN_INPUT - filmInputNode.value.length}/50`;
    } else {
        validationMessageNode.innerText = `${MAX_SYMBOLS_IN_INPUT - filmInputNode.value.length}/50`;
    };
};

// чекаем кнопку по длине строки инпута
const checkButton = () => {
    const lengthString = filmInputNode.value.length;
    if (lengthString > INIT_SUM_SYMBOLS && lengthString <= MAX_SYMBOLS_IN_INPUT) {
        addFilmButtonNode.disabled = false;
    } else {
        addFilmButtonNode.disabled = true;
    };
};


// возвращаем начальные значения для ввода и кнопки
const resetInputAndButton = () => {
    filmInputNode.value = '';
    validationMessageNode.innerText = `${MAX_SYMBOLS_IN_INPUT - filmInputNode.value.length}/50`;
    addFilmButtonNode.disabled = true;
};

// обработчик поля ввода фильма
const initInputHandler = () => {
    checkInput();
    checkButton();
};

// слушатель поля ввода
filmInputNode.addEventListener('input', initInputHandler);
