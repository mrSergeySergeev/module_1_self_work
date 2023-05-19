function addNewPostHandler() {
    initPostList(); 
    renderPostList(); 
};


popupNode.addEventListener('click', (event) => {
    const isClickOutsideContent = !event.composedPath().includes(popupContentNode)

    if (isClickOutsideContent) {
        togglePopup();
    }
})


newPostButtonNode.addEventListener('click', addNewPostHandler);
// btnCloseNode.addEventListener('click', popupHandler);