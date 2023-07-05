const INIT_SUM_SYMBOLS = 0;
const MAX_SYMBOLS_IN_INPUT = 50;
const INIT_EMPTY_LIST = `<li id="filmEmptyItem" class="filmItem">
                            <div class="filmItem__leftWrapper">
                                <p id="filmName" class="filmItem__name">Список фильмов пуст</p>
                            </div>
                        </li>`;

let films = [];
// { id: null, filmName: null, done: null, delete: null, }\

const filmFormNode = document.querySelector("#filmForm");
const filmInputNode = document.querySelector("#filmInput");
const addFilmButtonNode = document.querySelector("#addButton");
const validationMessageNode = document.querySelector("#validationMessage");
const filmListNode = document.querySelector("#filmList");
const filmEmptyItemNode = document.querySelector("#filmEmptyItem");

// zapushim massiv v LocalStorage
const pushFilmsToLS = () => {
  localStorage.setItem("films", JSON.stringify(films));
};

// 4ekaem localStorage
const checkLocalStorage = () => {
  if (localStorage.getItem("films")) {
    films = JSON.parse(localStorage.getItem("films"));
  }
  return films;
};

// ренденрим статус ЧЕК
const renderCheckedItems = () => {
  for (let i = 0; i < films.length; i++) {
    const label = filmListNode.querySelector(`#checkFilm${i}`);
    if (films[i].done === true) {
      label.checked = true;
    }
  }
};

// funkciya rendera massiva from LS
const renderArrayFromLS = () => {
  films.forEach((film) => {
    renderFilm(film);
  });
  renderCheckedItems();
};

// функция валидации заголовка
const checkInput = () => {
  const lengthString = filmInputNode.value.length;

  if (lengthString > INIT_SUM_SYMBOLS && lengthString <= MAX_SYMBOLS_IN_INPUT) {
    validationMessageNode.innerText = `${
      MAX_SYMBOLS_IN_INPUT - filmInputNode.value.length
    }/50`;
  } else {
    validationMessageNode.innerText = `${
      MAX_SYMBOLS_IN_INPUT - filmInputNode.value.length
    }/50`;
  }
};

// чекаем кнопку по длине строки инпута
const checkButton = () => {
  const lengthString = filmInputNode.value.length;

  if (lengthString > INIT_SUM_SYMBOLS && lengthString <= MAX_SYMBOLS_IN_INPUT) {
    addFilmButtonNode.disabled = false;
  } else {
    addFilmButtonNode.disabled = true;
  }
};

// скрываем строку "список фильмов пуст"
const checkEmptyFilmList = () => {
  if (films.length === 0) {
    const emptyListHTML = INIT_EMPTY_LIST;
    filmListNode.insertAdjacentHTML("afterbegin", emptyListHTML);
  }

  if (films.length > 0) {
    const emptyListItem = document.querySelector("#filmEmptyItem");
    emptyListItem ? emptyListItem.remove() : null;
  }
};

// check dliny spiska films
const makeIdForItem = () => {
  const lengthList = parseInt(films.length);
  return lengthList;
};

// возвращаем начальные значения для ввода и кнопки
const resetInputAndButton = () => {
  filmInputNode.value = "";
  validationMessageNode.innerText = `${
    MAX_SYMBOLS_IN_INPUT - filmInputNode.value.length
  }/50`;
  addFilmButtonNode.disabled = true;
  // возвращаем фокус на поле ввода
  filmInputNode.focus();
};

// рендерим HTML-раметку для фильма
const renderFilm = (film) => {
  // тернарный оператор = вопрос ? true : false
  const cssClassItem = film.done ? "filmItem filmItem-disabled" : "filmItem";

  const filmHtml = `
    <li id="${film.id}" class="${cssClassItem}">
        <div class="filmItem__leftWrapper">
            <input id="checkFilm${film.id}" data-action="done" class="filmItem__check" type="checkbox">
            <label for="checkFilm${film.id}"></label>
            <p id="filmName" class="filmItem__name">${film.text}</p>
        </div>
        <button id="filmDelete" data-action="delete" class="filmItem__delete"><img src="resources/button-close.png" alt="X"></button>
    </li>`;

  filmListNode.insertAdjacentHTML("beforeend", filmHtml);
};

// добавить фильм
const addFilm = () => {
  const idItem = makeIdForItem();
  const film = filmInputNode.value.trim();

  if (!film) {
    alert("Empty input");
    return;
  }

  const newFilm = {
    id: idItem,
    text: film,
    done: false,
  };

  films.push(newFilm);

  renderFilm(newFilm);

  console.log(films);
};

//renderIdAfterDelete
const renderAfterDelete = () => {
  filmListNode.innerHTML = "";
  for (let i = 0; i < films.length; i++) {
    const film = films[i];
    film.id = i;
    renderFilm(film);
  }
};

// удалить фильм
const deleteFilm = (event) => {
  if (event.target.dataset.action !== "delete") {
    return;
  }
  // metod 'closest' ishet roditelya sobytiya po klassy css
  const currentParentNode = event.target.closest(".filmItem");

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
  renderAfterDelete();

  currentParentNode.remove();

  pushFilmsToLS();
  checkEmptyFilmList();
  renderCheckedItems();
};

// otmetit' prosmotrennim
const doneFilm = (event) => {
  if (event.target.dataset.action !== "done") {
    return;
  }

  const currentParentNode = event.target.closest(".filmItem");

  const idItem = Number(currentParentNode.id);

  const film = films.find(function (film) {
    if (film.id === idItem) {
      return true;
    }
  });

  if (event.target.checked) {
    currentParentNode.classList.add("filmItem-disabled");
    film.done = true;
  } else {
    currentParentNode.classList.remove("filmItem-disabled");
    film.done = false;
  }

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
checkLocalStorage();

// zapuskaem proverky nali4iya filmov v !massive! films
checkEmptyFilmList();

// zapuskaem render soderzhimogo LS
renderArrayFromLS();

// слушатель поля ввода
filmInputNode.addEventListener("input", initInputHandler);

// слушатель отправки формы
filmFormNode.addEventListener("submit", addFilmHandler);

// slyshatel' ydalit' film
filmListNode.addEventListener("click", deleteFilm);

// slyshatel' "done" film
filmListNode.addEventListener("click", doneFilm);
