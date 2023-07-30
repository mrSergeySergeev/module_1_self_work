// info http://www.omdbapi.com/?apikey=cfa8e559&
// image http://img.omdbapi.com/?apikey=cfa8e559&
const ERROR_NUMBERS = ` <li>
                            <p>Too many results.</p>
                        </li>`
const ERROR_NOT_FOUND = `<li>
                            <p>Movie not found!</p>
                        </li>`

const filmFormNode = document.querySelector('#filmForm');
const filmInputNode = document.querySelector('#filmInput');
const findFilmButtonNode = document.querySelector('#findButton');
const filmListNode = document.querySelector('#filmList');
const pagesInfoNode = document.querySelector('#pagesInfoWrapper');


const getFilmFromUser = () => {
    const inputValue = filmInputNode.value.trim();
    return inputValue;
};

const clearFilmInput = () => filmInputNode.value = '';
const removeFilmForm = () => filmFormNode.classList.add('disabled');
const returnFilmForm = () => filmFormNode.classList.remove('disabled');
const clearFilmList = () => filmListNode.innerHTML = '';
const focusOnInput = () => filmInputNode.focus();
const findToManyResults = () => filmListNode.innerHTML = ERROR_NUMBERS;
const notFoundResults = () => filmListNode.innerHTML = ERROR_NOT_FOUND;
const clearNumsOfPages = () => pagesInfoNode.innerHTML = '';

// pos4itaem pages
const countPages = (pages) => {
    pages = Math.ceil(pages / 10);
    return pages;
};

// otrenderim nums of pages
const renderNumsOfPages = (pages) => {
    pagesInfoNode.innerHTML = ` <span>Страниц найдено: ${pages}</span>
                                <div class="pagesNavigationWrapper">
                                    <div class="inputWrapper">
                                        <input id="pageInput" data-action="changePageInput" min="1" max="${pages}" class="filmInput" type="number"
                                            placeholder="1-${pages}">
                                    </div>
                                    <button disabled id="pageButton" data-action="changePage" class="appButton">Перейти</button>
                                    <button data-action="newSearch" class="appButton">Новый поиск</button>
                                </div>`
};

// first zapros na server
const FirstRequestMovieToServer = () => {
    let pages = null;
    const inputValue = getFilmFromUser()
    fetch(`https://www.omdbapi.com/?apikey=cfa8e559&s=${inputValue}`)
        .then(response => response.json())
        .then((response) => {
            if (response.Error === 'Too many results.') {
                clearNumsOfPages();
                findToManyResults()
                return;
            };
            if (response.Error === 'Movie not found!') {
                clearNumsOfPages();
                notFoundResults()
                return;
            };
            clearFilmList();
            removeFilmForm();
            pages = countPages(response.totalResults)
            renderNumsOfPages(pages);
            renderFilmList(response.Search)
            // console.log(response)
            console.log(response.Search)
            // console.log(response.Search[0])
        });
};

// zapros number of page on server
const requestPageToServer = (page) => {
    const inputValue = getFilmFromUser()
    fetch(`https://www.omdbapi.com/?apikey=cfa8e559&s=${inputValue}&page=${page}`)
        .then(response => response.json())
        .then((response) => {
            renderFilmList(response.Search)
        });
};

// zapros about film on server
const requestInfoMovieToServer = (event) => {
    if (event.target.dataset.action !== "filmItem") {
        return;
    };
    console.log(event.target.id)
    fetch(`https://www.omdbapi.com/?apikey=cfa8e559&i=${event.target.id}`)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
        });
}


const renderFilmList = (array) => {
    filmListNode.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
        const listItem = document.createElement("li");
        listItem.className = "filmItem";
        listItem.dataset.action = "filmItem"
        listItem.id = array[i].imdbID
        listItem.innerHTML = `  <img class="filmItem__image" src="${array[i].Poster}" alt="Film's poster">
                                <div class="filmItem__wrapper">
                                    <p class="filmItem__title">${array[i].Title}</p>
                                    <p class="filmItem__year">${array[i].Year}</p>
                                    <p class="filmItem__type">${array[i].Type}</p>                    
                                </div>`;

        filmListNode.appendChild(listItem);
    };
};

// 4ekaem knopky find po inputy
const filmInputHandler = () => {
    const lengthString = filmInputNode.value.trim();
    if (!lengthString) {
        findFilmButtonNode.disabled = true;
    } else {
        findFilmButtonNode.disabled = false;
    };
};

const findFilmHandler = (event) => {
    // otmenyaet standartnoe povedenie browser
    event.preventDefault();
    FirstRequestMovieToServer()
};

const newSearchButtonHandler = (event) => {
    if (event.target.dataset.action !== "newSearch") {
        return;
    };
    returnFilmForm();
    clearFilmList();
    clearNumsOfPages();
    clearFilmInput();
    focusOnInput();
};

const changePageButtonHandler = (event) => {
    if (event.target.dataset.action !== "changePage") {
        return;
    };
    const currentParentNode = event.target.closest('.pagesNavigationWrapper');
    const pageInputNode = currentParentNode.querySelector('#pageInput');
    pageInputNode.addEventListener('input', pageInputHandler);
    const page = parseInt(pageInputNode.value);
    requestPageToServer(page);
};

// 4ekaem knopky change page po inputy
const pageInputHandler = (event) => {
    if (event.target.dataset.action !== "changePageInput") {
        return;
    };
    const currentParentNode = event.target.closest('.pagesNavigationWrapper');
    const pageInputNode = currentParentNode.querySelector('#pageInput');
    const pageButtonNode = currentParentNode.querySelector('#pageButton')
    const lengthString = pageInputNode.value;
    if (!lengthString) {
        pageButtonNode.disabled = true;
    } else {
        pageButtonNode.disabled = false;
    };
};

//


filmInputNode.addEventListener('input', filmInputHandler);
filmFormNode.addEventListener('submit', findFilmHandler);
pagesInfoNode.addEventListener('click', changePageButtonHandler);
pagesInfoNode.addEventListener('click', newSearchButtonHandler);
pagesInfoNode.addEventListener('input', pageInputHandler)
filmListNode.addEventListener('click', requestInfoMovieToServer);