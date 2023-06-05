const buttonNode = document.getElementById('button');
const textNode = document.getElementById('text');

const printNumbers = () => {
const arr = [];
for (let i = -10; i <= 10; i++) {
    arr.push(i);   
};
textNode.innerText = arr.join(' ');
};

buttonNode.addEventListener('click', printNumbers);