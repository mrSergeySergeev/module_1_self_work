// task#1
const numberMessage = 'введите число';
const buttonTask1Node = document.getElementById('button');
 
const getAFromUser = () => {
    const a = parseInt(prompt(numberMessage));
    return a;
};

const getBFromUser = () => {
    const b = parseInt(prompt(numberMessage));
    return b;
}

const mutiple = (a, b) => {
    const sum = a * b;
    return sum;
};

const buttonHandler = () => {
    const a = getAFromUser();
        if (!Number.isFinite(a)) {
        alert('error нах');
        return;
    };
    const b = getBFromUser();
    if (!Number.isFinite(b)) {
        alert('error');
        return;
    };
    const sum = mutiple(a, b);
    if (!Number.isFinite(sum)) {
        return;
    };
    alert(sum);
};

buttonTask1Node.addEventListener('click', buttonHandler);