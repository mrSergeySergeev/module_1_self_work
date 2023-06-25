const INIT_SUM_SYMBOLS = 0;
const MAX_SYMBOLS_IN_INPUT = 50;

let films = [];
// { id: null, filmName: null, done: null, delete: null, }
const filmFormNode = document.querySelector('#filmForm');
const filmInputNode = document.querySelector('#filmInput');
const addFilmButtonNode = document.querySelector('#addButton');
const deleteAllButtonNode = document.querySelector('#deleteAllButton');
const validationMessageNode = document.querySelector('#validationMessage');
const filmListNode = document.querySelector('#filmList')
const filmEmptyItemNode = document.querySelector('#filmEmptyItem');

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

// скрываем строку "список фильмов пуст"
const checkEmptyFilmList = () => {
    if (filmListNode.children.length > 1) {
        filmEmptyItemNode.classList.add('none');
    };
};

// check dliny spiska films
const makeIdForCheckbox = () => {
    const lengthList = filmListNode.children.length;
    const idItem = parseInt(lengthList);
    console.log(lengthList);
    return idItem;
}

// возвращаем начальные значения для ввода и кнопки
const resetInputAndButton = () => {
    filmInputNode.value = '';
    validationMessageNode.innerText = `${MAX_SYMBOLS_IN_INPUT - filmInputNode.value.length}/50`;
    addFilmButtonNode.disabled = true;
    // возвращаем фокус на поле ввода
    filmInputNode.focus();
};

// добавить фильм
const addFilm = (idItem) => {
    idItem = makeIdForCheckbox();
    const film = filmInputNode.value;    
    const filmHtml = `
    <li id="filmItem" class="filmItem">
        <div class="filmItem__leftWrapper">
            <input id="checkFilm${idItem}" data-action="done" class="filmItem__check" type="checkbox">
            <label for="checkFilm${idItem}"></label>
            <p id="filmName" class="filmItem__name">${film}</p>
        </div>
        <button id="filmDelete" data-action="delete" class="filmItem__delete"><img src="resources/button-close.png" alt="X"></button>
    </li>`;
    filmListNode.insertAdjacentHTML('beforeend', filmHtml);
};

// удалить фильм
const deleteFilm = (event) => {
    if (event.target.dataset.action !== 'delete') {
        return;
    };

    const currentParentNode = event.target.closest('.filmItem');
    currentParentNode.remove();

    if (filmListNode.children.length === 1) {
        filmEmptyItemNode.classList.remove('none')
    };
};

// otmetit' prosmotrennim
const doneFilm = (event) => {
    if (event.target.dataset.action !== 'done') {
        return;
    };

    const currentParentNode = event.target.closest('.filmItem');

    if (event.target.checked) {
        currentParentNode.classList.add('filmItem__name-disabled');
    } else {
        currentParentNode.classList.remove('filmItem__name-disabled');
    };
}

// обработчик поля ввода фильма
const initInputHandler = () => {
    checkInput();
    checkButton();
};

// obrabot4ik knopki addfilm
const addFilmHandler = (event) => {
    // эта строчка отменяет стандартное поведение браузера 
    // при отправке формы, здесь перезагрузку браузера
    event.preventDefault();
    addFilm();
    resetInputAndButton();
    checkEmptyFilmList();
};

// слушатель поля ввода
filmInputNode.addEventListener('input', initInputHandler);

// слушатель отправки формы
filmFormNode.addEventListener('submit', addFilmHandler);

// slyshatel' ydalit' film
filmListNode.addEventListener('click', deleteFilm);

// slyshatel' "done" film
filmListNode.addEventListener('click', doneFilm); 
