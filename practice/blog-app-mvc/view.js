class View {
    constructor({ onNewPost }) {
        this.postsNode = document.querySelector('#posts')
        this.titleInputNode = document.querySelector('#titleInput');
        this.bodyInputNode = document.querySelector('#bodyInput');
        this.btnNode = document.querySelector('#addPostButton');
        this.errorNode = document.querySelector('#error');

        this.onNewPost = onNewPost;

        this.btnNode.addEventListener('click', this._handleBtnClick);
    }

    render(posts, isError) {
        this._clearView();
        if (isError) {
            this.errorNode.innerHTML = 'Ошибка заголовка!!!';
        }

        posts.forEach(post => {
            this.postsNode.innerHTML += `
            <div>
                <p>${this._buildDateString(post.timestamp)}</p>
                <p>${post.title}</p>
                <p>${post.body}</p>
            </div>
            `;
        });
    }

    _handleBtnClick = () => {
        const title = this.titleInputNode.value;
        const body = this.bodyInputNode.value;

        this.onNewPost(title, body)
    }

    _buildDateString(timeStamp) {
        const date = new Date(timeStamp);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        return `${day}.${month}.${year} ${hours}:${minutes}`
    }

    _clearView () {
        this.postsNode.innerHTML = '';
        this.errorNode.innerHTML = '';
    }
}