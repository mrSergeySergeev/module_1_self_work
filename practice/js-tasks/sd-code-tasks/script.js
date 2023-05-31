// task#1
const numberMessage = 'введите число';
const buttonTask1Node = document.getElementById('task1');
const mutiple = () => {
    const a = parseInt(prompt(numberMessage));
    const b = parseInt(prompt(numberMessage));
    alert(a * b);
}

buttonTask1Node.addEventListener('click', mutiple);

// task#2
const dayMessage = 'введите день(от 1 до 31)';
const yearMessage = 'введите год(4 чифры)';
const buttonTask2Node = document.getElementById('task2');

const buildDate = () => {
    const day = parseInt(prompt(dayMessage));
    const mounth = getMounthByNumber();
    const year = parseInt(prompt(yearMessage));

    const currentDate = `${day}/${mounth}/${year}`;
    alert(currentDate);
};

buttonTask2Node.addEventListener('click', buildDate);

// task#3
const ageMessage = 'Введите возраст';
const buttonTask3Node = document.getElementById('task3');

const isAdult = () => {
    const age = parseInt(prompt(ageMessage));
    let boolean;
    if (age >= 18) {
        boolean = true;
    } else {
        boolean = false;
    };
    alert(boolean);
};

buttonTask3Node.addEventListener('click', isAdult);

// task#4
const buttonTask4Node = document.getElementById('task4');
const promtMessage = 'Введите месяц(от 1 до 12)'
const mounthArray = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь', 'ошибка...'];

const getMounthByNumber = () => {
    let currentMounth = parseInt(prompt(promtMessage));
    switch (currentMounth) {
        case 1:
            alert(mounthArray[0]);
            currentMounth = mounthArray[0];
            break;
        case 2:
            alert(mounthArray[1]);
            currentMounth = mounthArray[1];
            break;
        case 3:
            alert(mounthArray[2]);
            currentMounth = mounthArray[2];
            break;
        case 4:
            alert(mounthArray[3]);
            currentMounth = mounthArray[3];
            break;
        case 5:
            alert(mounthArray[4]);
            currentMounth = mounthArray[4];
            break;
        case 6:
            alert(mounthArray[5]);
            currentMounth = mounthArray[5];
            break;
        case 7:
            alert(mounthArray[6]);
            currentMounth = mounthArray[6];
            break;
        case 8:
            alert(mounthArray[7]);
            currentMounth = mounthArray[7];
            break;
        case 9:
            alert(mounthArray[8]);
            currentMounth = mounthArray[8];
            break;
        case 10:
            alert(mounthArray[9]);
            currentMounth = mounthArray[9];
            break;
        case 11:
            alert(mounthArray[10]);
            currentMounth = mounthArray[10];
            break;
        case 12:
            alert(mounthArray[11]);
            currentMounth = mounthArray[11];
            break;
        default:
            alert(mounthArray[12]);
            currentMounth = mounthArray[12];
            break;
    }
    return currentMounth;
};

buttonTask4Node.addEventListener('click', getMounthByNumber);

// task#5
const buttonTask5Node = document.getElementById('task5');
const sumMessage = 'Введите кол-во денюжек(число)';
const moneyMessage = 'Введите валюту для конвертации';
const notCorrect = 'не надо вводить некорректные значения';
const moneyCurrency = ['USD', 'EUR', 'KZT', 'AED'];

const convertRub = () => {
    let valueRub = parseInt(prompt(sumMessage));
    let currency = prompt(moneyMessage, moneyCurrency);
    valueRub = valueRub * 100;
    switch (currency) {
        case moneyCurrency[0]:
            valueRub = valueRub / 80.69;
            break;
        case moneyCurrency[1]:
            valueRub = valueRub / 86.51;
            break;
        case moneyCurrency[2]:
            valueRub = valueRub / 0.1815;
            break;
        case moneyCurrency[3]:
            valueRub = valueRub / 21.8;
            break;
        default:
            alert(notCorrect);
            return;
    };
    valueRub = Math.round(valueRub);
    valueRub = valueRub / 100;
    alert(`информация актуальна нa 31.5.2023: ${valueRub}`);
};

buttonTask5Node.addEventListener('click', convertRub);