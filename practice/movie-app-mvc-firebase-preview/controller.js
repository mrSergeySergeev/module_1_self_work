class Controller {
    constructor({
        add,
    }) {
        this.view = new View({
            addFilm: this.handleGetFilm,
            deleteFilmFromArray: this.handleDeleteFilm,
            doneFilmInArray: this.handleDoneFilm
        });

        this.model = new Model({
            renderFilms: this.handleArrayToView
        });

        this.add = add;
    }

    // берём значение инпута в View
    // передаём в Model и пушим в массив
    handleGetFilm = (film) =>{
        this.model.addFilm(film);
        this.add(film)
    }


    // берём массив из Model
    // передаём в View и render его
    handleArrayToView = (films) =>
        this.view.render(films)

    // Ловим id нажатой кнопки "удалить", 
    // передаём в Model, вырезаем, делаем render
    handleDeleteFilm = (id) =>
        this.model.deleteFilmFromArray(id);

    // Ловим id нажатого инпута, 
    // передаём в Model, меняем статус, делаем render
    handleDoneFilm = (id) =>
        this.model.doneFilmInArray(id);
}




