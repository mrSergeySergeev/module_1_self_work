const expenses = [];

const inputNode = document.getElementById('expenseInput');
const buttonNode = document.getElementById('expenseButton');
const historyNode = document.getElementById('expenseHistory');

buttonNode.addEventListener('click', function () {
    if (!inputNode.value) {
        return;
    }
    //take value from input
    const expense = parseInt(inputNode.value);

    //refresh input to zero
    inputNode.value = '';

    //add value in array
    expenses.push(expense);

    //output new list 'expenses'
    let expensionListHTML = '';

    expenses.forEach(element => {
        expensionListHTML += `<li>${element}</li>`;
    });

    historyNode.innerHTML = `<ol>${expensionListHTML}</ol>`;


    console.log(expenses);
})
