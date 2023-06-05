const buttonNode = document.getElementById('button');
const textNode = document.getElementById('text');

const messageForUserBegin = 'введите начало массива(от 0 до 10) длина массива - 10 элементов';
const messageForUserNumber = 'введите число для проверки(от 0 до 50)';
let arr = [];

const getNumberBeginFromUser = () => {
    let a = null;
    while (a < 0 || a > 10 || a == null || !Number.isInteger(a)) {
        a = parseInt(prompt(messageForUserBegin));
    };
    return a;
};

const getNumberCheckFromUser = () => {
    let a = null;
    while (a < 0 || a >= 50 || a == null || !Number.isInteger(a)) {
        a = parseInt(prompt(messageForUserNumber));
    };
    return a;
};

const formArray = (a) => {
    a = getNumberBeginFromUser();
    for (let i = 0; i <= 10; i++) {
        a = a;
        arr.push(a);
        a = a + 4;
    };
    return arr;
};

const includesNumber = (arr, b) => {
    arr = formArray();
    b = getNumberCheckFromUser();
    let boolean = arr.includes(b);
    let string = arr.join(' ');
    textNode.innerText = `число ${b} находится в [${string}]: ${boolean}`;
};

buttonNode.addEventListener('click', includesNumber);

