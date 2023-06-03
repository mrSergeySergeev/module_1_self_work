const buttonNode = document.getElementById('button');
const textNode = document.getElementById('text');

const getNumberMessage = 'введите число';

const getNumberFromUser = () => {
    let a;
    a = parseInt(prompt(getNumberMessage));
    return a;
}

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
    console.log(arr);
    return arr;
};

const renderArray = (arr) => {
    textNode.innerText = ;
};

buttonNode.addEventListener('click', formArray);