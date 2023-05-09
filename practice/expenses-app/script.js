const expenses = [];

const inputNode = document.getElementById('expenseInput');
const buttonNode = document.getElementById('expenseButton');

buttonNode.addEventListener('click', function() {
    if (!inputNode.value) {
        return;
    }

    const expense = parseInt(inputNode.value);

    inputNode.value = '';

    expenses.push(expense);
    
    console.log(expenses);
})
