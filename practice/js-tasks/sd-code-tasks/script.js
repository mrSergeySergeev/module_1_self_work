// task#4

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