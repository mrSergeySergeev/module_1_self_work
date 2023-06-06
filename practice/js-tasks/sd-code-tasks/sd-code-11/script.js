const buttonNode = document.getElementById('button');
const textNode = document.getElementById('text');

const answerNumbers = 'введите количество созданных персонажей(от 1 до 5)';
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
        ;
    }
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
    }
    console.log(person);
    return person;
}

const formArrayPerson = () => {
    let numberOfPersons = null;
    while (!Number.isInteger(numberOfPersons) || numberOfPersons < 0 || numberOfPersons > 5) {
        numberOfPersons = parseInt(prompt(answerNumbers));
    };
    for (let i = 0; i < numberOfPersons; i++) {
        createPerson();
        people.push(person);
    };
    console.log(people);
    return people;
};

const render = (people) => {
    people = formArrayPerson();
    textNode.innerHTML = '';
    people.forEach((person) => {
        const personItem = document.createElement('p');
        personItem.innerText = `имя: ${person.name} фамилия: ${person.surname} возраст: ${person.age}`
        textNode.appendChild(personItem);
    });   
};

const findOldestPeople =

buttonNode.addEventListener('click', render);

let arr = [{w:'a',r:2},{w:'a',r:5},{w:'a',r:6},{w:'a',r:93},{w:'a',r:3},]


console.log(arr)

arr.sort(function (a, b) {
    if (a.r > b.r) {
      return -1;
    }
    if (a.r < b.r) {
      return 1;
    }
    // a должно быть равным b
    return 0;
  });
console.log(arr)
