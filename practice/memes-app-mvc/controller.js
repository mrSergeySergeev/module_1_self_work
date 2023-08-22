class Controller {
    constructor() {
        this.model = new Model();

        this.view = new View({
            getMemesFromApi: this.getMemesFromApi
        })

        this.api = new API();
    }

    init() {
        this.api.fetchPosts()
            .then((memes) => {
                this.model.setMemes(memes);
            })
    }   
}