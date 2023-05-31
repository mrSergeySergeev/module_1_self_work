
// task#1
const a = 4;
const b = 2;

const mutiple = () => {
    return a + b;
}

console.log(mutiple());

// task#2
const day = 23;
const mounth = 5;
const year = 2011;

const buildDate = () => {
    const currentDate = `${day}/${mounth}/${year}`;
    return currentDate;
}

console.log(buildDate());

// task#3
const age = 12;

const isAdult = () => {
    let boolean;
    if (age >= 18) {
        boolean = true;
    } else {
        boolean = false;
    };
    return boolean;
};

console.log(isAdult());

// task#4

const promtMessage = 'Введите месяц'
const mounthArray = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь', 'ошибка...']

const getMounthByNumber = () => {
    const currentMounth = parseInt(prompt(promtMessage));
    switch (currentMounth) {
        case 1:
            console.log(mounthArray[0]);
            break;
        case 2:
            console.log(mounthArray[1]);
            break;
        case 3:
            console.log(mounthArray[2])
            break;
        case 4:
            console.log(mounthArray[3])
            break;
        case 5:
            console.log(mounthArray[4])
            break;
        case 6:
            console.log(mounthArray[5])
            break;
        case 7:
            console.log(mounthArray[6])
            break;
        case 8:
            console.log(mounthArray[7])
            break;
        case 9:
            console.log(mounthArray[8])
            break;
        case 10:
            console.log(mounthArray[9])
            break;
        case 11:
            console.log(mounthArray[10])
            break;
        case 12:
            console.log(mounthArray[11])
            break;
        default:
            console.log(mounthArray[12])
            break;
    }
};

getMounthByNumber()