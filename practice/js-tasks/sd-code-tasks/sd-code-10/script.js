const buttonNode = document.getElementById('button');
const textNode = document.getElementById('text');

const answerName = 'введите имя';
const answerSurname = 'введите фамилию';
const answerAge = 'введите возраст';

const person = {};

const getNameFromUser = () => {
    let name = null;
    while (!tipeof name  === 'string' || !name instanceof String) {
        name = prompt(answerName);
    };
    return name;
};

const getSurnameFromUser = () => {
    let surname = null;
    while (!tipeof(surname) === 'string' || !surname instanceof String) {
        surname = prompt(answerSurname);
    };
    return surname;
};

const getAgeFromUser = () => {
    let age = null;
    while (!Number.isInteger(age)); {
        age = parseInt(prompt(answerAge));
    };
};

const createPerson = (name, surname, age) => {
    person = {
        name:getNameFromUser(),
        surname:getSurnameFromUser(),
        age:getAgeFromUser(),
    }
    console.log(person);
}

buttonNode,addEventListener('click', createPerson);