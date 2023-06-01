// task#3
const ageMessage = 'Введите возраст(от 1 до 150 целым числом)';
const buttonNode = document.getElementById('button');
const textNode = document.getElementById('text');

const getAgeFromUser = () => {
    let age;
    while (!Number.isInteger(age) || age < 0 || age > 150) {
        age = parseInt(prompt(ageMessage));
    };
    return age;
};

const isAdult = (age) => {
    if (age >= 18) {
        boolean = true;
    } else {
        boolean = false;
    };
    return boolean;
};

const render = (boolean) => {
    textNode.innerText = boolean;
    console.log(boolean);
}

const buttonHandler = () => {
    const age = getAgeFromUser();
    isAdult(age);
    render(boolean);
};

buttonNode.addEventListener('click', buttonHandler);
