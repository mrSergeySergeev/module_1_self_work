class Controller {
    constructor() {
        this.view = new View({
            addFilm: this.handleGetFilm
        });

        this.model = new Model({
            takeFilms: this.handleArrayToView
        });
    }

    handleGetFilm = (film) => {
        this.model.addFilm(film);
    }

    handleArrayToView = (films) =>
        this.view.render(films)

}




