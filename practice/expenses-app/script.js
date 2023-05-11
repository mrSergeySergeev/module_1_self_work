const expenses = [];

const inputNode = document.getElementById('expenseInput');
const buttonNode = document.getElementById('expenseButton');
const historyNode = document.getElementById('expenseHistory');
const sumNode = document.getElementById('expenseSum')

buttonNode.addEventListener('click', function () {
    if (!inputNode.value) {
        return;
    }
    //берём значение from input
    const expense = parseInt(inputNode.value);

    //инпут на ноль
    inputNode.value = '';

    //добавляем значение инпута в массив
    expenses.push(expense);

    //переменная для списка расходов
    let expensionListHTML = '';

    //цикл для добавления расхода в список
    expenses.forEach(element => {
        expensionListHTML += `<li>${element} руб.</li>`;
    });

    //записываем результат в html таблицу
    historyNode.innerHTML = `<ol>${expensionListHTML}</ol>`;

    //посчитать сумму
    let sum = 0;

    expenses.forEach(element => {
        sum += element;
    });

    sumNode.innerText = sum;

    console.log(sum);
})
