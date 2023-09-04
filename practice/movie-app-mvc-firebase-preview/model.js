class Model {
    constructor ({ takeFilms }) {
        this.films = [];

        this.takeFilms = takeFilms;

    }

    addFilm = (film) => {
        this.films.push({
            id: Date.now(),
            done: false,
            film
        })

        // передаёт массив фильмов в view и render его
        this.takeFilms(this.films)
    }
}