class Model {
    constructor({ renderFilms }) {
        this.films = [];

        this.renderFilms = renderFilms;
    }

    addFilm = (film) => {
        this.films.push({
            id: Date.now(),
            done: false,
            film
        })

        // передаёт массив фильмов в view и render его
        this.renderFilms(this.films)
    }

    deleteFilmFromArray = (id) => {
        // ищем индекс элемента в массиве и вырезаем его
        const index = this.films.findIndex((elem) => elem.id === id);
        this.films.splice(index, 1);

        // передаёт массив фильмов в view и render его
        this.renderFilms(this.films);
    }

    doneFilmInArray = (id) => {
        // ищем индекс элемента в массиве
        const index = this.films.findIndex((elem) => elem.id === id);
        this._toggleStatusDone(this.films, index)
        this.renderFilms(this.films);
    }

    // функция смены статуса фильма
    _toggleStatusDone = (films, index) => {
        switch (films[index].done) {
            case true:
                this.films[index].done = false;
                break;
            case false:
                this.films[index].done = true;
                break;
        }
    }
}