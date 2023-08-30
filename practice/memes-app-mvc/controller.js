class Controller {
  constructor() {
    this.model = new Model();

    this.view = new View();

    this.api = new API();
  }

  init() {
    this.api.fetchPosts().then((memes) => {
      this.model.setMemes(memes);
    });
  }
}
