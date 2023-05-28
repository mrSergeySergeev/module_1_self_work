const ZERO = 0;
const INIT_TITLE_VALIDATION_MESSAGE = 'введите заголовок';
const TITLE_VALIDATION_MAX_SUM_SYMBOLS = 50;
const INIT_TEXT_VALIDATION_MESSAGE = 'введите текст поста';
const TEXT_VALIDATION_MAX_SUM_SYMBOLS = 200;

let posts = [];

const titleInputNode = document.getElementById('postTitleInput');
const textInputNode = document.getElementById('postTextInput');
const postsListNode = document.getElementById('postList');
const newPostButtonNode = document.getElementById('newPostButton');
const resetButtonNode = document.getElementById('resetButton');
const titleValidationNode = document.getElementById('titleValidation');
const textValidationNode = document.getElementById('textValidation');

// функция опредения окончания строки заголовка
function checkEndingStringTitle() {
    let endingStringTitle = TITLE_VALIDATION_MAX_SUM_SYMBOLS - titleInputNode.value.length;
    endingStringTitle = String(endingStringTitle);  
    endingStringTitle = endingStringTitle.split('');
    endingStringTitle = endingStringTitle.slice('-2');
    endingStringTitle = endingStringTitle.join('')
    console.log(endingStringTitle);

    if (endingStringTitle >= 11 && endingStringTitle <= 14) {
        endingStringTitle = 'ов';
        return endingStringTitle;
    } else {
        endingStringTitle = endingStringTitle.split('');
    };

    endingStringTitle = endingStringTitle[endingStringTitle.length - 1];
    if (endingStringTitle == 0) {
        endingStringTitle = 'ов';
        return endingStringTitle;
    };
    if (endingStringTitle == 1) {
        endingStringTitle = '';
        return endingStringTitle;
    };
    if (endingStringTitle > 1 && endingStringTitle <= 4) {
        endingStringTitle = 'a';
        return endingStringTitle;
    }  
    if (endingStringTitle > 4 && endingStringTitle <=9) {
        endingStringTitle = 'ов';
        return endingStringTitle;
    };
    return endingStringTitle;    
}

// функция опредения окончания строки текста поста
function checkEndingStringText() {
    let endingStringText = TEXT_VALIDATION_MAX_SUM_SYMBOLS - textInputNode.value.length;
    endingStringText = String(endingStringText);
    endingStringText = endingStringText.split('');
    endingStringText= endingStringText.slice('-2');
    endingStringText = endingStringText.join('')
    console.log(endingStringText);

    if (endingStringText >= 11 && endingStringTitle <= 14) {
        endingStringText = 'ов';
        return endingStringText;
    } else {
        endingStringText = endingStringText.split('');
    };
    endingStringText = endingStringText[endingStringText.length - 1];
    if (endingStringText == 0) {
        endingStringText = 'ов';
        return endingStringText;
    };
    if (endingStringText == 1) {
        endingStringText = '';
        return endingStringText;
    };
    if (endingStringText > 1 && endingStringText <= 4) {
        endingStringText = 'a';
        return endingStringText;
    }  
    if (endingStringText > 4 && endingStringText <=9) {
        endingStringText = 'ов';
        return endingStringText;
    };
    return endingStringText;    
};

// функция валидации заголовка поста
function checkTitle() {
    const titleString = titleInputNode.value;

    let titleCheck = titleString.split('');

    checkEndingStringTitle();
    if (titleCheck.length <= ZERO) {
        titleValidationNode.innerText = INIT_TITLE_VALIDATION_MESSAGE;
        return;
    };

    if (titleCheck.length > ZERO && titleCheck.length <= TITLE_VALIDATION_MAX_SUM_SYMBOLS) {
        titleValidationNode.innerText = `Осталось ${TITLE_VALIDATION_MAX_SUM_SYMBOLS - titleCheck.length} символ${checkEndingStringTitle()}`;
        return;
    } else {
        titleValidationNode.innerText = `Длина заголовка превышена${TITLE_VALIDATION_MAX_SUM_SYMBOLS - titleCheck.length} символ${checkEndingStringTitle()}`;
    };
};

// функция валидации текста поста
function checkText(endingStringText) {
    const textString = textInputNode.value;

    let textCheck = textString.split('');

    if (textCheck.length <= ZERO) {
        textValidationNode.innerText = INIT_TEXT_VALIDATION_MESSAGE;
        return;
    };

    if (textCheck.length > ZERO && textCheck.length <= TEXT_VALIDATION_MAX_SUM_SYMBOLS) {
        textValidationNode.innerText = `Осталось ${TEXT_VALIDATION_MAX_SUM_SYMBOLS - textCheck.length} символ${checkEndingStringText()}`;
        return;
    } else {
        textValidationNode.innerText = `Длина текста поста превышена${TEXT_VALIDATION_MAX_SUM_SYMBOLS - textCheck.length} символ${checkEndingStringText()}`;
    };
};

// функция проверки состояния кнопки
checkButton = () => {
    const titleString = titleInputNode.value.length;
    const textString = textInputNode.value.length;
    if (titleString === ZERO || textString === ZERO || !titleString || !textString) {
        newPostButtonNode.disabled = true;
        return;
    } else {
        newPostButtonNode.disabled = false;
    };
}


// функция формирования времени поста
initDate = () => {
    let date = new Date();
    let options = {
        // era: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        //timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };
    const currentDate = date.toLocaleString("ru", options);
    return currentDate;
};

// функция формирования массива постов
initPostList = () => {
    const currentDate = initDate();
    const currentTitle = titleInputNode.value;
    const currentText = textInputNode.value;
    if (!currentTitle) {
        return;
    };
    if (!currentText) {
        return;
    };

    let post = { title: currentTitle, text: currentText, date: currentDate, }

    posts.push(post);

    localStorage.setItem("historyOfPosts", JSON.stringify(posts));
    console.log(posts);
};

// функция проверки localStorage
function initHistoryOfPosts() {
    const historyFromStorage = JSON.parse(localStorage.getItem("historyOfPosts"));
    if (Array.isArray(historyFromStorage)) {
        posts = historyFromStorage;
        renderPostList();
    } else {
        return;
    };
};

// функция отрисовки постов
renderPostList = () => {
    postsListNode.innerHTML = '';

    posts.forEach(post => {
        const listItem = document.createElement("li");
        listItem.className = "postItem";
        listItem.innerHTML = `<p>${post.date}</p><h2>${post.title}</h2><p>${post.text}</p>`;

        postsListNode.appendChild(listItem);
    });
};

// функция для возвращения исходных значений ввода
function initialValues() {
    textInputNode.value = "";
    titleInputNode.value = "";
    titleValidationNode.innerText = INIT_TITLE_VALIDATION_MESSAGE;
    textValidationNode.innerText = INIT_TEXT_VALIDATION_MESSAGE;
    newPostButtonNode.disabled = true;
};

// функция удаления из  localStorage
function resetHistoryOfPosts() {
    posts = [];
    localStorage.removeItem("historyOfPosts");
}

// обработчик кнопки "опубликовать"
function newPostHandler() {
    initPostList();
    renderPostList();
    initialValues();
};

// обработчик кнопки "очистить"
function resetHistoryHandler() {
    resetHistoryOfPosts();
    renderPostList();
};

function titleHandler() {
    checkTitle();
    checkButton();
};

function textHandler() {
    checkText();
    checkButton();
}

initHistoryOfPosts();
titleInputNode.addEventListener('input', titleHandler);
textInputNode.addEventListener('input', textHandler);
newPostButtonNode.addEventListener('click', newPostHandler);
resetButtonNode.addEventListener('click', resetHistoryHandler);