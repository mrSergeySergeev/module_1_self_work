// task#1
const numberMessage = 'введите целое число (дроби приводятся к целому числу)';
const textNode = document.getElementById('text');
const buttonTask1Node = document.getElementById('button');

const getNumberFromUser = () => {
    let a = null;
    while (!Number.isInteger(a)) {
        a = parseInt(prompt(numberMessage));
    };
    return a;
};

const mutiple = (a, b) => {
    const sum = a * b;
    return sum;
};

const render = (sum, a, b) => {
    textNode.innerText = `${a} умножить на ${b} равно ${sum}`;
};

const buttonHandler = () => {
    const a = getNumberFromUser();
    const b = getNumberFromUser();
    const sum = mutiple(a, b);
    render(sum, a, b);
};

buttonTask1Node.addEventListener('click', buttonHandler);