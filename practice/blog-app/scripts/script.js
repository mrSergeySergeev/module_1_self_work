const posts = [];

const titleInputNode = document.getElementById('postTitleInput');
const textInputNode = document.getElementById('postTextInput');
const postsListNode = document.getElementById('postList');

const newPostButtonNode = document.getElementById('newPostButton');

const validationMessageNode = document.getElementsByClassName('popup__title')

checkTitle = () => {
    const string = titleInputNode.value;
    let check = string.split('');
    if (check.length <= 0) {
        console.log('errorCheckTitle');
        return;
    };
    if (check.length >= 100) {
        console.log('errorCheckTitle');
        return;
    };
};

checkText = () => {
    const string = textInputNode.value;
    let check = string.split('');
    if (check.length <= 0) {
        console.log('errorCheckText');
        return;
    };
    if (check.length >= 200) {
        console.log('errorCheckText');
        return;
    };
};


initPostList = () => {
    const currentTitle = checkTitle();
    if (!currentTitle) {
        console.log('errorInitTitle');
        return;
    }
    const currentText = checkText();
    if (!currentText) {
        console.log('errorInitText');
        initInputValue;
        return;
    }

    let post = { title: currentTitle, text: currentText, }

    posts.push(post);
    textInputNode.value = "";
    titleInputNode.value = "";    
};

renderPostList = () => {
    postsListNode.innerHTML = '';
    posts.forEach(post => {
        const listItem = document.createElement("li");
        listItem.className = "postItem";
        listItem.innerHTML = `<h2>${post.title}</h2><p>${post.text}</p>`;

        postsListNode.appendChild(listItem);
    });
}

newPostButtonNode.addEventListener('click', renderPostList());