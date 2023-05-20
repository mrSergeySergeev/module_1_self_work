checkTitle = () => {
    const string = titleInputNode.value;
    let check = string.split('');
    if (check.length <= 0) {
        checkTitleNull();
        console.log('errorCheckTitle');
        return;
    };
    if (check.length >= 100) {
        checkTitleMore();
        console.log('errorCheckTitle');
        return;
    };
    return string;
};

checkDescription = () => {
    const string = descriptionInputNode.value;
    let check = string.split('');
    if (check.length <= 0) {
        checkDescriptionNull();
        console.log('errorCheckDescription');
        return;
    };
    if (check.length >= 200) {
        checkDescriptionMore();
        console.log('errorCheckDescription');
        return;
    };
    return string;
};


initPostList = () => {
    const currentTitle = checkTitle();
    if (!currentTitle) {
        initInputValue();
        console.log('errorInitTitle');
        return;
    }
    const currentDescription = checkDescription();
    if (!currentDescription) {
        console.log('errorInitDescription');
        initInputValue;
        return;
    }

    let post = { title: currentTitle, description: currentDescription, }

    posts.push(post);
    descriptionInputNode.value = "";
    titleInputNode.value = "";
};




