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
const checkInput = () => {
    const lengthString = filmInputNode.value.length;
    if (lengthString > ZERO && lengthString <= MAX_SYMBOLS_IN_INPUT) {
        validationMessageNode.innerText = `${MAX_SYMBOLS_IN_INPUT - filmInputNode.value.length}/50`;
    } else {
        validationMessageNode.innerText = `${MAX_SYMBOLS_IN_INPUT - filmInputNode.value.length}/50`;
    };
};

// чекаем кнопку по длине строки инпута
const checkButton = () => {
    const lengthString = filmInputNode.value.length;
    if (lengthString > ZERO && lengthString <= MAX_SYMBOLS_IN_INPUT) {
        addFilmButtonNode.disabled = false;
    } else {
        addFilmButtonNode.disabled = true;
    };
};

// check array "films" in localStorage
const checkFilmsInLocalStorage = () => {
    const historyFromLocalStorage = JSON.parse(localStorage.getItem("historyOfFilms"));
    if (Array.isArray(historyFromLocalStorage)) {
        films = historyFromLocalStorage;
        console.log(films);
        renderFilmList();
        return films;        
    } else {
        initHtmlFilmList();
        return;
    };
};

// функция считывает фильмы, прописанные в html-разметке, if localStorage is empty
const initHtmlFilmList = () => {
    let filmName = filmNameNode;        
    for (let i = 0; i < filmName.length; i++){
        filmName[i] = filmName[i].outerText;
        films.push(filmName[i].outerText);        
    };    
    console.log(films);
    return;
};

//добавляем название фильма в массив
const addNewFilmToList = () => {
    let filmName = filmInputNode.value;
    films.push(filmName);
    console.log(films);
}

// added array "films" to localStorage 
const addFilmsToLocalStorage = () => {
    localStorage.setItem("historyOfFilms", JSON.stringify(films));
    console.log(films);
};

// return initial values in input and button
const resetInputAndButton = () => {
    filmInputNode.value = '';
    addFilmButtonNode.disabled = true;
};

// render Html layout
const renderFilmList = () => {
    filmListNode.innerHTML = '';

    films.forEach(film => {
        const listItem = document.createElement('li');
        listItem.className = "filmItem";
        listItem.innerHTML = `<input id="checkFilm${film}" class="filmItem__check" type="checkbox">
                              <label for="checkFilm${film}"></label>
                              <p class="filmItem__name">${film}</p>
                              <button id="filmDelete" class="filmItem__delete">X</button>`
        
        filmListNode.appendChild(listItem);
    });
};

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
checkFilmsInLocalStorage()
filmInputNode.addEventListener('input', initInputHandler);
addFilmButtonNode.addEventListener('click', addFilmButtonHandler);