class Controller {
    constructor() {
        this.view = new View({
            addFilm: this.handleGetFilm
        });

        this.model = new Model({
            takeFilms: this.handleArrayToView
        });
    }

    // берём значение инпута в View
    // передаём в Model и пушим в массив
    handleGetFilm = (film) => {
        this.model.addFilm(film);
    }

    // берём массив из Model
    // передаём в View и render его
    handleArrayToView = (films) =>
        this.view.render(films)
}




