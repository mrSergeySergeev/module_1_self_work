class View {
  constructor() {
    this.filmInputNode = document.querySelector("#filmInput");
    this.validationMessageNode = document.querySelector("#validationMessage");
    this.filmFormNode = document.querySelector("#filmForm");
    this.addFilmButtonNode = document.querySelector("#addButton");
    this.filmListNode = document.querySelector("#filmList");

    this.filmInputNode.addEventListener("input", this._checkButton);
    this.filmFormNode.addEventListener("submit", this.submitForm);
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

  submitForm = (event) => {
    //отменяет стандартное поведение браузера
    //при отправке формы не обновляет страницу
    event.preventDefault();
    const film = this.filmInputNode.value;
    console.log(film);
    return film;
  };
}
