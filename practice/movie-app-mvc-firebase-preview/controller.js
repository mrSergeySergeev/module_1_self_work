class Controller {
    constructor({
        add,
        get,
        doneItemTrue,
        doneItemFalse,
        deleteItem,
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
        this.get = get;
        this.doneItemTrue = doneItemTrue;
        this.doneItemFalse = doneItemFalse;
        this.deleteItem = deleteItem;

    }

    initApp = () => {
        this.get().then((result => {
            this.model.initFilms(result)
        }))
    }

    // берём значение инпута в View
    // передаём в Model и пушим в массив
    handleGetFilm = (film) => {
        film = this.model.addFilm(film)
        this.add(film)
    }

    // берём массив из Model
    // передаём в View и render его
    handleArrayToView = (films) =>{
        this.view.render(films)
    }

    // Ловим id нажатой кнопки "удалить", 
    // передаём в Model, вырезаем, делаем render
    handleDeleteFilm = (id) => {
        this.model.deleteFilmFromArray(id)
        this.deleteItem(id)
    }

    // Ловим id нажатого инпута, 
    // передаём в Model, меняем статус, делаем render
    handleDoneFilm = (id) => {
        const boolean = this.model.doneFilmInArray(id);
        if (boolean) { this.doneItemTrue(id) }
        else { this.doneItemFalse(id) }
    }
}




