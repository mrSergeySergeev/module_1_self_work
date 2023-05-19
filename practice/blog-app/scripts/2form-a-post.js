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
    return string;
};

checkDescription = () => {
    const string = descriptionInputNode.value;
    let check = string.split('');
    if (check.length <= 0) {
        console.log('errorCheckDescription');
        return;
    };
    if (check.length >= 200) {
        console.log('errorCheckDescription');
        return;
    };
    return string;
};


initPostList = () => {
    const currentTitle = checkTitle();
    if (!currentTitle) {
        console.log('errorInitTitle');
        return;
    }
    const currentDescription = checkDescription();
    if (!currentDescription) {
        console.log('errorInitDescription');
        return;
    }

    let post = { title: currentTitle, description: currentDescription, }

    posts.push(post);
};




