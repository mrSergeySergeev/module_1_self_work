class Model {
    constructor({ onPostChanges }) {
        this.posts = [];
        this.onPostChanges = onPostChanges;
    }

    addPost(title, description) {
        this.posts.push({
            title,
            description
        });

        this.onPostChanges(this.posts);
    }

    getPosts() {
        return this.posts;
    }
}