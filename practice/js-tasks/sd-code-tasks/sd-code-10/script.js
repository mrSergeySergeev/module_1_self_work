const buttonNode = document.getElementById('button');
const textNode = document.getElementById('text');

const answerName = 'введите имя';
const answerSurname = 'введите фамилию';
const answerAge = 'введите возраст, от 0 до 100';

let names = ['Ваня', 'Петя', 'Сидор'];
let surnames = ['Иванов', 'Петров', 'Сидоров'];
let person = {};

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

render = (person) => {
    person = createPerson();
    textNode.innerHTML =
        `<p>имя: ${person.name}</p>
        <p>фамилия: ${person.surname}</p>
        <p>возраст: ${person.age}</p>`
};

buttonNode.addEventListener('click', render)