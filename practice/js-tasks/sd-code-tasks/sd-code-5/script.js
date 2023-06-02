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
    while (!true) {
        currency = prompt(moneyMessage, moneyCurrency);
        checkCurrency(currency);
        return;
    };
};

const checkCurrency = () => {
    let currency = getMoneyTypeFromUser();
    for (let i = 0; i < moneyCurrency.length; i++) {
        if (currency === moneyCurrency[i]) {
            console.log(true);
            return true;
        }
        console.log(false);
        return false
    };
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
    return valueRub;
};

const render = (valueRub) => {
    textNode.innerText = `${valueRub}`
};

const buttonHandler = () => {
    console.log(moneyCurrency)
    let valueRub = convertRub();
    // let currency = getMoneyTypeFromUser();
    render(valueRub);
};

buttonTask5Node.addEventListener('click', buttonHandler);