const buttonNode = document.getElementById('button');
const textNode = document.getElementById('text');
const resultTextNode = document.getElementById('resultText');

const answerNumbers = 'введите количество создаваемых персонажей(от 1 до 5)';
const answerName = 'введите имя';
const answerSurname = 'введите фамилию';
const answerAge = 'введите возраст, от 0 до 100';

let names = ['Ваня', 'Петя', 'Сидор'];
let surnames = ['Иванов', 'Петров', 'Сидоров'];
let person = {};
let people = [];

const getNameFromUser = () => {
    let name = null;
    while (!name || !names.includes(name)) {
        name = prompt(answerName, names);
    };
    return name;
};

const getSurnameFromUser = () => {
    let surname = null;
    while (!surname || !surnames.includes(surname)) {
        surname = prompt(answerSurname, surnames);
    };
    return surname;
};

const getAgeFromUser = () => {
    let age = null;
    while (!Number.isInteger(age) || age < 0 || age > 100) {
        age = parseInt(prompt(answerAge));
    };
    return age;
};

const createPerson = (name, surname, age) => {
    name = getNameFromUser();
    surname = getSurnameFromUser();
    age = getAgeFromUser();
    person = {
        name: name,
        surname: surname,
        age: age,
    };
    console.log(person);
    return person;
};

const formArrayPerson = () => {
    let numberOfPersons = null;
    while (!Number.isInteger(numberOfPersons) || numberOfPersons < 0 || numberOfPersons > 5) {
        numberOfPersons = parseInt(prompt(answerNumbers));
    };
    for (let i = 0; i < numberOfPersons; i++) {
        createPerson();
        people.push(person);
    };
    return people;
};

const renderArray = (people) => {
    people = formArrayPerson();
    textNode.innerHTML = 'Имеем массив объектов:';
    people.forEach((person) => {
        const personItem = document.createElement('p');
        personItem.innerText = `имя: ${person.name} фамилия: ${person.surname} возраст: ${person.age}`
        textNode.appendChild(personItem);
    });
    return people;
};

const findOldestPeople = (people) => {
    people = renderArray();
    people.sort(function (a, b) {
        if (a.age > b.age) {
            return -1;
        };
        if (a.age < b.age) {
            return 1
        };
        return 0;
    });
    return people;
};

const renderOldestMan = (people, person) => {
    people = findOldestPeople();
    person = people[0];
    
    resultTextNode.innerText = `Cамый взрослый человек ${person.name} ${person.surname} с возрастом ${person.age} лет(года)`
    console.log(person);
};

const buttonHandler = () => {
    renderOldestMan();
};

buttonNode.addEventListener('click', buttonHandler);

