const buttonNode = document.getElementById('button');

const inputNode = document.getElementsByClassName('num');

const func = () => {
    let sum = 0;
    for (let i = 0; i < inputNode.length; i++) {
        sum += inputNode[i].value;
    }
    const resultNode = document.getElementById('result');
    resultNode.innerHTML = sum;
};

buttonNode.addEventListener('click', func);
