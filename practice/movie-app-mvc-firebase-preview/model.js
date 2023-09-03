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
        this.takeFilms(this.films)
    }
}