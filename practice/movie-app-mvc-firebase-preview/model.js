class Model {
    constructor({ renderFilms }) {
        this.films = [];

        this.renderFilms = renderFilms;
    }

    initFilms = (array) => {
        for (let i = 0; i < array.length; i++) {
            const elem = array[i];
            this.films.push({
                id: elem.id,
                order: elem.order,
                done: elem.done,
                film: elem.film
            });
        };
        // передаёт массив фильмов в view и render его
        this.renderFilms(this.films)
    }

    addFilm = (film) => {
        film = {
            // window.crypto.randomUUID() это относительно новый и надежный способ создания UUID с помощью собственного Javascript. 
            // Он поддерживается во всех современных, вечнозеленых браузерах и может генерировать UUID с помощью одной строки кода
            id: window.crypto.randomUUID(),
            order: Date.now(),
            done: false,
            film: film
        }
        this.films.push({
            id: film.id,
            order: null,
            done: film.done,
            film: film.film
        })

        // передаёт массив фильмов в view и render его
        this.renderFilms(this.films)
        return film;
    }


    deleteFilmFromArray = (id) => {
        // ищем индекс элемента в массиве и вырезаем его
        const index = this.films.findIndex((elem) => elem.id == id);
        this.films.splice(index, 1);

        // передаёт массив фильмов в view и render его
        this.renderFilms(this.films);
    }

    doneFilmInArray = (id) => {
        // ищем индекс элемента в массиве
        const index = this.films.findIndex((elem) => elem.id == id);
        console.log(this.films[index])
        const boolean = this._toggleStatusDone(this.films, index)
        this.renderFilms(this.films);
        return boolean
    }

    // функция смены статуса фильма
    _toggleStatusDone = (films, index) => {
        switch (films[index].done) {
            case true:
                this.films[index].done = false;
                return false
            case false:
                this.films[index].done = true;
                return true
        }
    }
}