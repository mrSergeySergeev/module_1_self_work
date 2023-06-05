const buttonNode = document.getElementById('button');
const textNode = document.getElementById('text');

const getNumberMessage = 'введите число от -10 до 10';

const getNumberFromUser = () => {
    let a = null;
    while (a < -10 || a > 10 || a == null) {
        a = parseInt(prompt(getNumberMessage));
    };
    return a;
};

const formArray = () => {
    let arr = [];
    let a = getNumberFromUser();
    let b = getNumberFromUser();
    if (a < b) {
        let temp = a;
        a = b;
        b = temp;
    };

    for (let i = b; i <= a; i++) {
        arr.push(i);
    };
    return arr;
};

const renderArray = (arr) => {
    arr = formArray();
    textNode.innerText = arr.join(' ');
};

buttonNode.addEventListener('click', renderArray);