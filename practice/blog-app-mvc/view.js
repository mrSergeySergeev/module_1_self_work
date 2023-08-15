class View {
    constructor( { onNewPost }) {
        this.postsNode = document.querySelector('#posts')
        this.titleInputNode = document.querySelector('#titleInput');
        this.descriptionInputNode = document.querySelector('#descriptionInput');
        this.btnNode = document.querySelector('#addPostButton');

        this.onNewPost = onNewPost;

        this.btnNode.addEventListener('click', this.handleBtnClick);
    }

    renderPosts(posts) {
        this.postsNode.innerHTML = '';

        posts.forEach(post => {
            this.postsNode.innerHTML += `
            <div>
                <p>${post.title}</p>
                <p>${post.description}</p>
            </div>
            `;
        });
    }

    handleBtnClick = () => {
        const title = this.titleInputNode.value;
        const description = this.descriptionInputNode.value;

        this.onNewPost(title, description)
    }
}