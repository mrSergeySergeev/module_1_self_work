const buttonNode = document.getElementById('button');
const textNode = document.getElementById('text')

const messageForUser = 'введите число от 1 до 10';


const getNumberFromUser = () => {
    let a = null;
    while (a < 0 || a > 10 || a == null) {
        a = parseInt(prompt(messageForUser));
    };
    return a;
};

const formArray = () => {
    let arr = [];
    let a = getNumberFromUser();
    let b = getNumberFromUser();
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