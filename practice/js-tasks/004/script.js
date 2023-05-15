const elem = document.getElementById('num');

const func = () => {
    let sum = 0;
    let string = elem.value;
    let array = string.split(',');
    for (let i = 0; i < array.length; i++) {
        sum += +array[i];
    }
    let example = document.getElementById ('example');
    example.innerHTML = string;
    let result = document.getElementById('result');
    result.innerHTML = sum/array.length;
    elem.value = '';
}

elem.addEventListener('blur', func);