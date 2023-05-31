// task#3
let age;
let boolean;
const ageMessage = 'Введите возраст(от 1 до 150)';
const buttonNode = document.getElementById('button');
const textNode = document.getElementById('text');

const isAdult = (age) => {    
    if (age >= 18) {
        boolean = true;
    } else {
        boolean = false;
    };
    return boolean;
};

const buttonHandler = () => {
    const age = parseInt(prompt(ageMessage));
    if (age <=0 || age > 150 || !Number.isFinite(age)) {
        alert('error');
        return;        
    };
    isAdult(age);
    textNode.innerText = boolean;
    console.log(boolean);
};

buttonNode.addEventListener('click', buttonHandler);
