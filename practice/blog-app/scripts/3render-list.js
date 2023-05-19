renderPostList = () => {
    postsListNode.innerHTML = '';
    posts.forEach(post => {
        const listItem = document.createElement("li");
        listItem.className = "postItem";
        listItem.innerHTML = `<h2>${post.title}</h2><p>${post.description}</p>`;

        postsListNode.appendChild(listItem);
    });
}