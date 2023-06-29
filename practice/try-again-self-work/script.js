const INIT_SUM_SYMBOLS = 0;
const MAX_SYMBOLS_IN_INPUT = 50;

let films = [];
// { id: null, filmName: null, done: null, delete: null, }\

const filmFormNode = document.querySelector('#filmForm');
const filmInputNode = document.querySelector('#filmInput');
const addFilmButtonNode = document.querySelector('#addButton');
const validationMessageNode = document.querySelector('#validationMessage');
const filmListNode = document.querySelector('#filmList')
const filmEmptyItemNode = document.querySelector('#filmEmptyItem');

// zapushim massiv v LocalStorage
const pushFilmsToLS = () => {
    localStorage.setItem('films', JSON.stringify(films));
};

// 4ekaem localStorage
const checkLocalStorage = () => {
    if (localStorage.getItem('films')) {
        films = JSON.parse(localStorage.getItem('films'));
    };
    return films;
};

// ренденрим статус ЧЕК
const renderCheckedItems = () => {
    for (let i = 0; i < films.length; i++) {
        const label = filmListNode.querySelector(`#checkFilm${i}`)
        if (films[i].done === true) {
            label.checked = true;
        };
    };
};

// funkciya rendera massiva from LS
const renderArrayFromLS = () => {
    films.forEach(film => {
        const cssClassItem = film.done ? 'filmItem filmItem-disabled' : 'filmItem';

        const filmHtml = `
        <li id="${film.id}" class="${cssClassItem}">
            <div class="filmItem__leftWrapper">
                <input id="checkFilm${film.id}" data-action="done" class="filmItem__check" type="checkbox">
                <label for="checkFilm${film.id}"></label>
                <p id="filmName" class="filmItem__name">${film.text}</p>
            </div>
            <button id="filmDelete" data-action="delete" class="filmItem__delete"><img src="resources/button-close.png" alt="X"></button>
        </li>`;

        filmListNode.insertAdjacentHTML('beforeend', filmHtml);
    });
    renderCheckedItems();
};

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
    if (films.length === 0) {
        const emptyListHTML = `<li id="filmEmptyItem" class="filmItem">
                                    <div class="filmItem__leftWrapper">
                                        <p id="filmName" class="filmItem__name">Список фильмов пуст</p>
                                    </div>
                                </li>`;
        filmListNode.insertAdjacentHTML('afterbegin', emptyListHTML);
    };

    if (films.length > 0) {
        const emptyListItem = document.querySelector('#filmEmptyItem');
        emptyListItem ? emptyListItem.remove() : null;
    };
};

// check dliny spiska films
const makeIdForItem = () => {
    const lengthList = parseInt(films.length);
    return lengthList;
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
const addFilm = () => {
    const idItem = makeIdForItem();
    const film = filmInputNode.value.trim();

    if (!film) {
        return;
    };

    const newFilm = {
        id: idItem,
        text: film,
        done: false,
    };

    films.push(newFilm);

    // тернарный оператор = вопрос ? true : false
    const cssClassItem = newFilm.done ? 'filmItem filmItem-disabled' : 'filmItem';
    const cssClassName = newFilm.done ? 'filmItem__name filmItem__name-disabled' : 'filmItem__name';

    const filmHtml = `
    <li id="${newFilm.id}" class="${cssClassItem}">
        <div class="filmItem__leftWrapper">
            <input id="checkFilm${newFilm.id}" data-action="done" class="filmItem__check" type="checkbox">
            <label for="checkFilm${newFilm.id}"></label>
            <p id="filmName" class="${cssClassName}">${newFilm.text}</p>
        </div>
        <button id="filmDelete" data-action="delete" class="filmItem__delete"><img src="resources/button-close.png" alt="X"></button>
    </li>`;

    filmListNode.insertAdjacentHTML('beforeend', filmHtml);
};

//renderIdAfterDelete
const genereteAndRenderIdAfterDeleteFilm = () => {
    filmListNode.innerHTML = '';
    for (let i = 0; i < films.length; i++) {
        const film = films[i];
        film.id = i;

        const cssClassItem = film.done ? 'filmItem filmItem-disabled' : 'filmItem';
        // const checkboxCheck = film.done ? setAttribute('checked') : removeAttribute('checked');

        const filmHtml = `
        <li id="${film.id}" class="${cssClassItem}">
            <div class="filmItem__leftWrapper">
                <input id="checkFilm${film.id}" data-action="done" class="filmItem__check" type="checkbox">
                <label for="checkFilm${film.id}"></label>
                <p id="filmName" class="filmItem__name">${film.text}</p>
            </div>
            <button id="filmDelete" data-action="delete" class="filmItem__delete"><img src="resources/button-close.png" alt="X"></button>
        </li>`;

        filmListNode.insertAdjacentHTML('beforeend', filmHtml);
    };
};

// удалить фильм
const deleteFilm = (event) => {
    if (event.target.dataset.action !== 'delete') {
        return;
    };
    // metod 'closest' ishet roditelya sobytiya po klassy css
    const currentParentNode = event.target.closest('.filmItem');

    const idItem = Number(currentParentNode.id);

    // nahodim index elementa v massive
    const index = films.findIndex((film) => film.id === idItem);

    console.log(index);

    //virezaem element iz massiva
    films.splice(index, 1);

    // или через метод массива filter, который возвращает нам новый массив
    // films = films.filter(function (film) {
    //     if (film.id !== id) {
    //         return true;
    //     } else {
    //         return false;
    //     };
    // });

    //perepisivaem id v massive i renderim html
    genereteAndRenderIdAfterDeleteFilm()

    currentParentNode.remove();

    pushFilmsToLS()
    checkEmptyFilmList();
    renderCheckedItems()
};

// otmetit' prosmotrennim
const doneFilm = (event) => {
    if (event.target.dataset.action !== 'done') {
        return;
    };

    const currentParentNode = event.target.closest('.filmItem');

    const idItem = Number(currentParentNode.id);

    const film = films.find(function (film) {
        if (film.id === idItem) {
            return true;
        };
    });

    if (event.target.checked) {
        currentParentNode.classList.add('filmItem-disabled');
        film.done = true;
    } else {
        currentParentNode.classList.remove('filmItem-disabled');
        film.done = false;
    };

    pushFilmsToLS();
};

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
    pushFilmsToLS();
    resetInputAndButton();
    checkEmptyFilmList();
    console.log(films);
};

// zapuskaem proverky LocalStorage
checkLocalStorage()

// zapuskaem proverky nali4iya filmov v !massive! films 
checkEmptyFilmList();

// renderim soderzhimoe LS
renderArrayFromLS();

// слушатель поля ввода
filmInputNode.addEventListener('input', initInputHandler);

// слушатель отправки формы
filmFormNode.addEventListener('submit', addFilmHandler);

// slyshatel' ydalit' film
filmListNode.addEventListener('click', deleteFilm);

// slyshatel' "done" film
filmListNode.addEventListener('click', doneFilm); 
