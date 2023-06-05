const buttonNode = document.getElementById('button');
const textNode = document.getElementById('text')

const messageForUserNumber = 'введите число от 1 до 10';
const messageForUserRepeat = 'введите число повторений умножения на 2 от 1 до 10';


const getNumberFromUser = () => {
    let a = null;
    while (a < 0 || a > 10 || a == null || !Number.isInteger(a)) {
        a = parseInt(prompt(messageForUserNumber));
    };
    return a;
};

const getNumberRepeatFromUser = () => {
    let a = null;
    while (a < 0 || a > 10 || a == null || !Number.isInteger(a)) {
        a = parseInt(prompt(messageForUserRepeat));
    };
    return a;
};

const formArray = () => {
    let arr = [];
    let a = getNumberFromUser();
    let b = getNumberRepeatFromUser();
    for (let i = 0; i < b; i++) {
        a = a
        arr.push(a);
        a = a * 2;
    };
    console.log(arr);
    return arr;
};

const renderArray = (arr) => {
    arr = formArray();
    const string = arr.join(' + ');
    const sum = arr.reduce((sum, a) => (sum = sum + a));
    textNode.innerText = `${string} = ${sum}`
};

buttonNode.addEventListener('click', renderArray);