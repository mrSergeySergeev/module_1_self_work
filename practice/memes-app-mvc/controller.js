class Controller {
<<<<<<< HEAD
  constructor() {
    this.model = new Model();

    this.view = new View();
=======
    constructor() {
        this.model = new Model({
            renderMemInput: this.handleInitMemesList
        });

        this.view = new View({
            getMemOnId: this.findMemOnId
        })
>>>>>>> bdc4f4986f853fc29857ff64adad673689bf42d9

    this.api = new API();
  }

<<<<<<< HEAD
  init() {
    this.api.fetchPosts().then((memes) => {
      this.model.setMemes(memes);
    });
  }
}
=======
    init() {
        this.api.fetchPosts()
            .then((memes) => {
                this.model.initMemes(memes);
                this.view.getMemFromUser()
            })
    }

    handleInitMemesList = (memes) => {
        this.view.renderMemesInput(memes);
    }

    findMemOnId = (id) => {
        const mem = this.model.getMemOnId(id);
        return mem;       
    }
}
>>>>>>> bdc4f4986f853fc29857ff64adad673689bf42d9
