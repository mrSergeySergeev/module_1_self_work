const LIMIT = 10000;
const CURRENCY = ' руб.';
const STATUS_IN_LIMIT = 'всё хорошо';
const STATUS_IN_LIMIT_CLASSNAME = 'status_good';
const STATUS_OUT_OF_LIMIT = 'всё плохо';
const STATUS_OUT_OF_LIMIT_CLASSNAME = 'status_bad';

const inputNode = document.getElementById('expenseInput');
const buttonNode = document.getElementById('expenseButton');
const historyNode = document.getElementById('expenseHistory');
const sumNode = document.getElementById('expenseSum');
const limitNode = document.getElementById('expenseLimit');
const statusNode = document.getElementById('expenseStatus');

const expenses = [];

init(expenses);

buttonNode.addEventListener('click', function () {
    const expanse = getExpanseFromUser();

    if (!expanse) {
        return;
    }

    trackExpanse(expanse);

    render(expenses);
});

function init(expenses) {
    limitNode.innerText = LIMIT;
    statusNode.innerText = STATUS_IN_LIMIT;
    sumNode.innerText = calculateExpanses(expenses);
};

function trackExpanse(expanse) {
    expenses.push(expanse);
}

function getExpanseFromUser() {
    if (!inputNode.value) {
        return null;
    }

    const expense = parseInt(inputNode.value);

    clearInput();

    return expense;
};

function clearInput() {
    inputNode.value = '';
};

function calculateExpanses(expenses) {
    let sum = 0;

    expenses.forEach(element => {
        sum += element;
    });

    return sum;
};

function render(expenses){
    const sum = calculateExpanses(expenses);

    renderHistory(expenses);
    renderSum(sum);
    renderStatus(sum);
};

function renderHistory(expenses) {
    let expensionListHTML = '';

    expenses.forEach(element => {
        expensionListHTML += `<li>${element} ${CURRENCY}</li>`;
    });

    historyNode.innerHTML = `<ol>${expensionListHTML}</ol>`;
}

function renderSum(sum) {
    sumNode.innerText = sum;
};

function renderStatus(sum) {
    if (sum <= LIMIT) {
        statusNode.innerText = STATUS_IN_LIMIT;
        statusNode.classList.add(STATUS_IN_LIMIT_CLASSNAME);
    } else {
        statusNode.innerText = STATUS_OUT_OF_LIMIT;
        statusNode.classList.add(STATUS_OUT_OF_LIMIT_CLASSNAME);
    }
};