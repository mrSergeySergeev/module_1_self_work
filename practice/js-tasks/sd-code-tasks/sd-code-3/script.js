// task#3
const ageMessage = 'Введите возраст(от 1 до 150 целым числом)';
const buttonNode = document.getElementById('button');
const textNode = document.getElementById('text');

const getAgeFromUser = () => {
    let age = null;
    while (!Number.isInteger(age) || age < 0 || age > 150) {
        age = parseInt(prompt(ageMessage));
    };
    console.log(age);
    return age;
};

const isAdult = (age) => {
    age = getAgeFromUser();
    let boolean = null;
    if (age >= 18) {
        boolean = true;
    } else {
        boolean = false;
    };
    return boolean;
};

const render = (boolean) => {
    boolean = isAdult();
    textNode.innerText = boolean;
    console.log(boolean);
}

const buttonHandler = () => {
    render();
};

buttonNode.addEventListener('click', buttonHandler);
