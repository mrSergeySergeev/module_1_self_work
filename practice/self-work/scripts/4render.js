// отрисовываем HTML разметку
const renderFilmList = (films) => {
    films = checkFilmsInLocalStorage();
    console.log(films);
    filmListNode.innerHTML = '';

    for (let i = 0; i < films.length; i++) {
        const listItem = document.createElement('li');
        listItem.className = "filmItem";
        listItem.innerHTML = `<div class="filmItem__leftWrapper">
                             <input id="checkFilm${films[i].id}" class="filmItem__check" type="checkbox">
                             <label for="checkFilm${films[i].id}"></label>                             
                             <p class="filmItem__name">${films[i].filmName}</p>
                             </div>
                             <button id="filmDelete${i}" class="filmItem__delete"><img src="resources/button-close.png" alt="X"></button>`

        filmListNode.appendChild(listItem);
    };    
};