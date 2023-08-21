class Model {
    constructor({ onPostChanges }) {
        this.posts = [];
        this.isError = false;
        this.onPostChanges = onPostChanges;
    }

    addPost(title, body) {
        if (this._isPostValid(title)) {
            this.isError = false;
            console.log(this._isPostValid(title))

            this.posts.push({
                title,
                body,
                timestamp: Date.now()
            });
        } else {
            this.isError = true;
        }

        this.onPostChanges(this.posts, this.isError);
    }

    setPosts(posts) {
        this.posts = posts;

        this.onPostChanges(this.posts, this.isError);
    } 

    getPosts() {
        return this.posts;
    }

    _isPostValid(title) {
        const lengthTitle = parseInt(title.length)
        return lengthTitle < 100;
    }
}