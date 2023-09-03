class Controller {
  constructor() {
    this.model = new Model({
      renderMemInput: this.handleInitMemesList,
    });

    this.view = new View({
      getMemOnId: this.findMemOnId,
    });

    this.api = new API();
  }

  init() {
    this.api.fetchPosts().then((memes) => {
      this.model.initMemes(memes);
      this.view.getMemFromUser();
    });
  }

  handleInitMemesList = (memes) => {
    this.view.renderMemesInput(memes);
  };

  findMemOnId = (id) => {
    const mem = this.model.getMemOnId(id);
    return mem;
  };
}
