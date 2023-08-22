class API {
    constructor() {
        this.baseUrl = 'https://api.imgflip.com';
    }

    fetchPosts () {
        return fetch(`${this.baseUrl}/get_memes`)
        .then(data => data.json());
    }
}