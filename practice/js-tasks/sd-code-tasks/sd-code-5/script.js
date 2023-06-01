const buttonTask5Node = document.getElementById('task5');
const textNode = document.getElementById('text');
const sumMessage = 'Введите кол-во денюжек(число больше нуля)';
const moneyMessage = 'Введите валюту для конвертации';
const moneyCurrency = ['USD', 'EUR', 'KZT', 'AED'];

const getValueFromUser = () => {
    let valueRub;
    while (!Number.isInteger(valueRub) || valueRub <= 0) {
        valueRub = parseInt(prompt(sumMessage));
    };
    return valueRub;
};

const getMoneyTypeFromUser = () => {
    let currency;
    while (currency !== moneyCurrency[0]) {
        currency = prompt(moneyMessage, moneyCurrency);
    };
    return currency;
};

const convertRub = () => {
    let valueRub = getValueFromUser();
    let currency = getMoneyTypeFromUser();
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
    };
    valueRub = Math.round(valueRub);
    valueRub = valueRub / 100;
    return currency, valueRub;
};

const render = (valueRub, currency) => {
    textNode.innerText = `${valueRub}${currency}`
};

const buttonHandler = () => {
    console.log(moneyCurrency)
    let valueRub = convertRub();
    let currency = getMoneyTypeFromUser();
    render(valueRub, currency);
};

buttonTask5Node.addEventListener('click', buttonHandler);