const buttonNode = document.getElementById('button');
const textNode = document.getElementById('text');

const getNumberMessage = 'введите число от -50 до 50';

const getNumberFromUser = () => {
    let a = null;
    while (a < -50 || a > 50 || a == null) {
        a = parseInt(prompt(getNumberMessage));
    };
    return a;
};

const formArray = (a, b) => {
    let arr = [];
    a = getNumberFromUser();
    b = getNumberFromUser();
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