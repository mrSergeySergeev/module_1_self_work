const buttonNode = document.getElementById('task');

buttonNode.addEventListener('click', calculateSum);

let inputNode = document.getElementsByClassName('input');
console.log(inputNode);
function calculateSum() {
    let sum = 0;
    for (let i = 0; i < inputNode.length; i++){
        sum += +inputNode[i].value;
        console.log(inputNode[i].value);
    };

    let outputResult = document.getElementById('sum');
    outputResult.value = sum;
    console.log(sum)
}