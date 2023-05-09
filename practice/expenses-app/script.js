const expenses = [];

const inputNode = document.getElementById('expenseInput');
const buttonNode = document.getElementById('expenseButton');

buttonNode.addEventListener('click', function() {
    if (!inputNode.value) {
        return;
    }

    const expense = parseInt(inputNode.value);

    expenses.push(expense);

    inputNode.value = '';
    console.log(expenses);
})
