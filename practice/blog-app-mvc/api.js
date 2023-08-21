class API {
    constructor() {
        this.baseUrl = 'https://jsonplaceholder.typicode.com';
    }

    fetchPosts () {
        return fetch(`${this.baseUrl}/posts`)
        .then(data => data.json());
    }
}