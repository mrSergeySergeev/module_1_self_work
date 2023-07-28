// info http://www.omdbapi.com/?apikey=cfa8e559&
// image http://img.omdbapi.com/?apikey=cfa8e559&
const ERROR_NUMBERS = ` <li>
                            <p>Too many results.</p>.
                        </li>`
const ERROR_NOT_FOUND = `<li>
                            <p>Movie not found!</p>.
                        </li>`

const filmFormNode = document.querySelector('#filmForm');
const filmInputNode = document.querySelector('#filmInput');
const findFilmButtonNode = document.querySelector('#findButton');
const filmListNode = document.querySelector('#filmList');
const pagesInfoNode = document.querySelector('#pagesInfoWrapper');
const pageInputNode = document.querySelector('#pageInput')
const changePageButtonNode = document.querySelector('#changePageButton')

let response = {};

const getFilmFromUser = () => {
    const inputValue = filmInputNode.value.trim();
    return inputValue;
};

const clearFilmList = () => filmListNode.innerHTML = '';
const focusOnInput = () => filmInputNode.focus();
const findToManyResults = () => filmListNode.innerHTML = ERROR_NUMBERS;
const notFoundResults = () => filmListNode.innerHTML = ERROR_NOT_FOUND;


// pos4itaem pages
const countPages = (pages) => {
    pages = Math.ceil(pages / 10);
    console.log(pages);
    return pages;
};

// otrenderim nums of pages
const renderNumsOfPages = (pages) => {
    pagesInfoNode.innerHTML =  `<span>Страниц найдено: ${pages}</span>
                                <div class="pagesNavigationWrapper">
                                    <div class="inputWrapper">
                                        <input id="pageInput" min="1" max="${pages}" class="filmInput" type="number" placeholder="1-${pages}">
                                    </div>
                                    <button id="changePageButton" class="findButton">Перейти</button>
                                </div>`
}

// zapros na server
const requestMovieToServer = () => {
    let pages = null;
    const inputValue = getFilmFromUser()
    fetch(`https://www.omdbapi.com/?apikey=cfa8e559&s=${inputValue}&page=${pages}`)
        .then(response => response.json())
        .then((response) => {
            if (response.Error === 'Too many results.') {
                findToManyResults()
                return;
            };
            if (response.Error === 'Movie not found!') {
                notFoundResults()
                return;
            };
            clearFilmList();
            pages = countPages(response.totalResults)
            renderNumsOfPages(pages);
            console.log(response)
            console.log(response.Search)
            console.log(response.Search[0])
        });
};

const requestPageToServer = () => {
    const pages = pageInputNode.value;
    const inputValue = getFilmFromUser()
    fetch(`https://www.omdbapi.com/?apikey=cfa8e559&s=${inputValue}&page=${pages}`)
        .then(response => response.json())
        .then((response) => {
            // if (response.Error === 'Too many results.') {
            //     findToManyResults()
            //     return;
            // };
            // if (response.Error === 'Movie not found!') {
            //     notFoundResults()
            //     return;
            // };
            // clearFilmList();
            // pages = countPages(response.totalResults)
            // renderNumsOfPages(pages);
            console.log(response)
            console.log(response.Search)
            console.log(response.Search[0])
        });
};

// 4ekaem knopky po inputy
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
    requestMovieToServer()
    focusOnInput();
};

const changePageButtonHandler = () => {
    requestPageToServer()
}

filmInputNode.addEventListener('input', filmInputHandler);
filmFormNode.addEventListener('submit', findFilmHandler);
// changePageButtonNode.addEventListener('click',changePageButtonHandler)