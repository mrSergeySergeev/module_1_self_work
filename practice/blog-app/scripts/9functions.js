function addNewPostHandler() {
    initPostList(); 
    renderPostList(); 
};


newPostButtonNode.addEventListener('click', addNewPostHandler);