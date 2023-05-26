const ZERO = 0;
const INIT_TITLE_VALIDATION_MESSAGE = 'введите заголовок';
const TITLE_VALIDATION_MAX_SUM_SYMBOLS = 50;
const INIT_TEXT_VALIDATION_MESSAGE = 'введите текст';
const TEXT_VALIDATION_MAX_SUM_SYMBOLS = 200;

const posts = [];

const titleInputNode = document.getElementById('postTitleInput');
const textInputNode = document.getElementById('postTextInput');
const postsListNode = document.getElementById('postList');
const newPostButtonNode = document.getElementById('newPostButton');
const titleValidationNode = document.getElementById('titleValidation');
const textValidationNode = document.getElementById('textValidation');

// функция валидации заголовка поста
function checkTitle() {
    const titleString = titleInputNode.value;

    let titleCheck = titleString.split('');

    if (titleCheck.length <= ZERO) {
        titleValidationNode.innerText = INIT_TITLE_VALIDATION_MESSAGE;
        return;
    };

    if (titleCheck.length > ZERO) {
        titleValidationNode.innerText = `${INIT_TITLE_VALIDATION_MESSAGE}. осталось:${TITLE_VALIDATION_MAX_SUM_SYMBOLS - titleCheck.length} символов`;
        return;
    };

};

// функция валидации текста поста
function checkText() {
    const textString = textInputNode.value;

    let textCheck = textString.split('');

    if (textCheck.length <= ZERO) {
        textValidationNode.innerText = INIT_TEXT_VALIDATION_MESSAGE;
        return;
    };

    if (textCheck.length > ZERO) {
        textValidationNode.innerText = `${INIT_TEXT_VALIDATION_MESSAGE}. осталось:${TEXT_VALIDATION_MAX_SUM_SYMBOLS - textCheck.length} символов`;
        return;
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
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };
    const currentDate = date.toLocaleString("ru", options);
    return currentDate;
}

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
    console.log(posts);
};

// функция отрисовки поств
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
}

// обработчик кнопки "опубликовать"
function newPostHandler() {
    initPostList();
    renderPostList();
    initialValues();
};

titleInputNode.addEventListener('input', checkTitle);
textInputNode.addEventListener('input', checkText);
newPostButtonNode.addEventListener('click', newPostHandler);