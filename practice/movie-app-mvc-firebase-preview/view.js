class View {
    constructor({
        addFilm
    }) {
        this.filmInputNode = document.querySelector("#filmInput");
        this.validationMessageNode = document.querySelector("#validationMessage");
        this.filmFormNode = document.querySelector("#filmForm");
        this.addFilmButtonNode = document.querySelector("#addButton");
        this.filmListNode = document.querySelector("#filmList");

        this.addFilm = addFilm;

        this.filmInputNode.addEventListener("input", this._checkButton);
        this.filmFormNode.addEventListener("submit", this._submitForm);
        this.filmListNode.addEventListener('click', this.deleteFilm);
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
            const filmHtml = `            
                <li id="${elem.id}" class="filmItem">
                    <div class="filmItem__checkWrapper">
                        <input id="checkFilm${elem.id}" data-action="done" class="filmItem__check" type="checkbox">
                        <label for="checkFilm${elem.id}">${elem.film}</label>
                        
                    </div>
                     <button id="filmDelete" data-action="delete" class="filmItem__delete"><img src="resources/button-close.png" alt="X"></button>
                </li>`;
            this.filmListNode.insertAdjacentHTML("beforeend", filmHtml);
        });
    }

    deleteFilm = (event) => {
        if (event.target.dataset.action !== "delete") {
            return;
        }
        const currentParentNode = event.target.closest('.filmItem')
        const idItem = Number(currentParentNode.id);
        console.log(idItem)
    }

}
