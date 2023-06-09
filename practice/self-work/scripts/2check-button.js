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

// чекаем localStorage
// const checkFilmsInLocalStorage = () => {
//     const historyFromLocalStorage = JSON.parse(localStorage.getItem("historyOfFilms"));
//     if (Array.isArray(historyFromLocalStorage)) {
//         films = historyFromLocalStorage;
//         return films;
//     };
//     initHtmlFilmList();
//     return films;
// };

// возвращаем начальные значения для ввода и кнопки
const resetInputAndButton = () => {
    filmInputNode.value = '';
    validationMessageNode.innerText = `${MAX_SYMBOLS_IN_INPUT - filmInputNode.value.length}/50`;
    addFilmButtonNode.disabled = true;
};