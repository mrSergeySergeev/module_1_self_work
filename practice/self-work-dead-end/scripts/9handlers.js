// обработчик кнопки "добавить фильм"
const addFilmButtonHandler = () => {
    addNewFilmToList();
    addFilmsToLocalStorage();
    resetInputAndButton();
    renderFilmList();
};

// обработчик инпута названия фильма
const initInputHandler = () => {
    checkInput();
    checkButton();
};

// order to run of programm
// check films in localStorage
// check films in html layout
renderFilmList();
filmInputNode.addEventListener('input', initInputHandler);
addFilmButtonNode.addEventListener('click', addFilmButtonHandler);