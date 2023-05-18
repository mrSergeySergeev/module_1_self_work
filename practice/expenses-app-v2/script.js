const STATUS_IN_LIMIT = "ХОРОШО";
const STATUS_OUT_OF_LIMIT = "ПЛОХО";

const inputNode = document.getElementById("expenseInput");
const addButtonNode = document.getElementById("addButton");
const clearButtonNode = document.getElementById("clearButton");
const limitChangeButtonNode = document.getElementById('limitChangeButton');
const limitNode = document.getElementById("limitValue");
const totalValueNode = document.getElementById("totalValue");
const statusNode = document.getElementById("statusText");
const historyList = document.getElementById("historyList");
const limitInputNode = document.getElementById('limitInput');
const popupButtonAcceptNode = document.getElementById('popupButtonAccept');
const categorySelectNode = document.getElementById('categorySelect');

let expenses = [];
let limit = parseInt(limitNode.innerText);

const getTotal = () => {
    let sum = 0;
    expenses.forEach((expense) => {
        sum += expense.amount;
    });

    return sum;
};

const renderStatus = () => {
    const total = getTotal(expenses);
    totalValueNode.innerText = total;

    if (total <= limit) {
        statusNode.innerText = STATUS_IN_LIMIT;
        statusNode.className = "stats__statusText_positive";
    } else {
        statusNode.innerText = `${STATUS_OUT_OF_LIMIT} (${limit - total} руб)`;
        statusNode.className = "stats__statusText_negative";
    }
};

const renderHistory = () => {
    historyList.innerHTML = "";
    expenses.forEach((expense) => {
        const historyItem = document.createElement("li");
        historyItem.className = "rub";
        historyItem.innerText = `${expense.category} - ${expense.amount}`;

        historyList.appendChild(historyItem);
    });
};

const render = () => {
    renderStatus();
    renderHistory();
};

const getExpenseFromUser = () => parseInt(inputNode.value);
const getCategoryFromUser = () => categorySelectNode.value;
const getNewLimitFromUser = () => parseInt(limitInputNode.value);

const clearInput = () => {
    inputNode.value = "";
};

function addButtonHandler() {
    const currentAmount = getExpenseFromUser();
    if (!currentAmount) {
        return;
    };

    const currentCategory = getCategoryFromUser();
    if (currentCategory === "выбирайте категорию") {
        return;
    };

    const newExpense = {amount: currentAmount, category: currentCategory};

    expenses.push(newExpense);
    console.log(expenses)
    render();
    clearInput();
};

function limitChangeButtonHandler() {
    let newLimit = getNewLimitFromUser();
    if (!newLimit) {
        togglePopup();
        return;
    };

    limitNode.innerText = newLimit;
    limit = newLimit;

    limitInputNode.value = '';

    togglePopup();
    render();

    return limit;
};

const clearButtonHandler = () => {
    expenses = [];
    render()
};

addButtonNode.addEventListener("click", addButtonHandler);
clearButtonNode.addEventListener("click", clearButtonHandler);
popupButtonAcceptNode.addEventListener('click', limitChangeButtonHandler);
