// функция считывает фильмы, прописанные в html-разметке, if localStorage is empty
// const initHtmlFilmList = () => {
//     let filmName = filmNameNode;
//     for (let i = 0; i < filmName.length; i++) {
//         films.push({ id: parseInt([i]), filmName: filmName[i].outerText, done: false, delete: false });
//     };
//     return films;
// };

// добавляем название фильма в массив
const addNewFilmToList = () => {
    let film = filmInputNode.value;
    films.push({ id: films.length, filmName: film, done: false, delete: false });
    return films;
};

// добавляем массив "фильмы" в localeStorage
const addFilmsToLocalStorage = () => {
    localStorage.setItem("historyOfFilms", JSON.stringify(films));
    return films;
};


