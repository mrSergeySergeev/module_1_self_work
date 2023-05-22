function addNewPostHandler() {
    initPostList(); 
    renderPostList(); 
};

popupNode.addEventListener('click', (event) => {
    const isClickOutsideContent = !event.composedPath().includes(popupContentNode)

    if (isClickOutsideContent) {
        removePopup();
    }
})


newPostButtonNode.addEventListener('click', addNewPostHandler);
btnCloseNode.addEventListener('click', removePopup);