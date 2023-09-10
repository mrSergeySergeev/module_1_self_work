class View {
    constructor({
        addFilm,
        deleteFilmFromArray,
        doneFilmInArray
    }) {
        this.filmInputNode = document.querySelector("#filmInput");
        this.validationMessageNode = document.querySelector("#validationMessage");
        this.filmFormNode = document.querySelector("#filmForm");
        this.addFilmButtonNode = document.querySelector("#addButton");
        this.filmListNode = document.querySelector("#filmList");

        this.addFilm = addFilm;
        this.deleteFilmFromArray = deleteFilmFromArray;
        this.doneFilmInArray = doneFilmInArray;

        this.filmInputNode.addEventListener("input", this._checkButton);
        this.filmFormNode.addEventListener("submit", this._submitForm);
        this.filmListNode.addEventListener('click', this._deleteFilm);
        this.filmListNode.addEventListener('click', this._doneFilm);
    }

    _validateInput = (lengthString) => {
        this.validationMessageNode.innerHTML = `${parseInt(lengthString)}/100`;
    };

    _checkButton = () => {
        const INIT_SUM_SYMBOLS = 0;
        const MAX_SYMBOLS_IN_INPUT = 100;
        const lengthString = this.filmInputNode.value.length;

        this._validateInput(lengthString);
        if (
            lengthString > INIT_SUM_SYMBOLS &&
            lengthString <= MAX_SYMBOLS_IN_INPUT
        ) {
            this.addFilmButtonNode.disabled = false;
        } else {
            this.addFilmButtonNode.disabled = true;
        }
    };

    _clearInput = () => {
        const INIT_VALIDATION = "0/100"
        this.filmInputNode.value = "";
        this.validationMessageNode.innerHTML = INIT_VALIDATION;
        this.filmInputNode.focus();
    }

    _submitForm = (event) => {
        //отменяет стандартное поведение браузера
        //при отправке формы не обновляет страницу
        event.preventDefault();
        const film = this.filmInputNode.value.trim();
        if (!film) {
            this._clearInput()
            return
        }
        this._clearInput()
        //функция добавляет в модели новый фильм в массив 
        this.addFilm(film)
    };

    render = (films) => {
        console.log(films)
        this.filmListNode.innerHTML = ""
        films.forEach(elem => {
            this._renderFilm(elem);
        });
    };

    _renderFilm = (elem) => {
        const li = document.createElement('li');
        li.id = elem.id;
        li.classList.add("filmItem");

        const div = document.createElement('div');
        div.classList.add("filmItem__checkWrapper");

        const input = document.createElement('input');
        input.type = "checkbox";
        input.dataset.action = "done";
        input.id = `checkFilm${elem.id}`;
        input.classList.add("filmItem__check");
        if (elem.done) {
            input.checked = true;
            li.classList.add('filmItem-disabled')
        };

        const label = document.createElement('label');
        label.setAttribute('for', `checkFilm${elem.id}`);
        label.innerText = elem.film;

        const button = document.createElement('button');
        button.classList.add("filmItem__delete");
        button.dataset.action = "delete";
        button.innerHTML = `<img src="resources/button-close.png" alt="X">`

        div.append(input, label);
        li.append(div, button);
        this.filmListNode.append(li);
    }

    _deleteFilm = (event) => {
        if (event.target.dataset.action !== "delete") {
            return;
        }
        const currentParentNode = event.target.closest('.filmItem')
        const idItem = currentParentNode.id;
        this.deleteFilmFromArray(idItem);
    };

    _doneFilm = (event) => {
        if (event.target.dataset.action !== "done") {
            return;
        }
        const currentParentNode = event.target.closest('.filmItem')
        const idItem = currentParentNode.id;
        this.doneFilmInArray(idItem);
    }

}
