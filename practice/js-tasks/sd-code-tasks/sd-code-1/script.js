// task#1
let sum;
const numberMessage = 'введите число';
const buttonTask1Node = document.getElementById('button');

const mutiple = (a, b) => {
    sum = a * b;
    return sum;
};

const buttonHandler = () => {
    let a = parseInt(prompt(numberMessage));
    if (!Number.isFinite(a)) {
        alert('error');
        return;
    };
    let b = parseInt(prompt(numberMessage));
    if (!Number.isFinite(b)) {
        alert('error');
        return;
    };
    mutiple(a, b);
    if (!Number.isFinite(sum)) {
        return;
    }
    alert(sum);
};

buttonTask1Node.addEventListener('click', buttonHandler);