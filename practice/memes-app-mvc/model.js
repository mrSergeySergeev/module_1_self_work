class Model {
  constructor({ render }) {
    this.memes = [];
    this.isError = false;
    this.render = render;
  }

  _checkError = (check) => {
    if (check != true) {
      this.isError = true;
      console.log("сюда приделать сообщение об ошибке в html");
      return;
    } else {
      this.isError = false;
      console.log("сюда не надо приделать сообщение об ошибке в html ");
    }
  };

  setMemes = (memes) => {
    this.memes = memes;
    const boolean = memes.success;
    this._checkError(boolean);
    memes = memes.data.memes;
    console.log(memes);

    this.render(this.memes)
  };

  getMemes = () => {
    return this.memes;
  };
}
