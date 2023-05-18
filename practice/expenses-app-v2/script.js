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
let limit;

initLimit();
initHistory()
render();

function getTotal() {
    let sum = 0;

    expenses.forEach((expense) => {
        sum += expense.amount;
    });

    return sum;
};

function renderStatus(){
    limit = parseInt(limitNode.innerText);
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

function renderHistory() {
    historyList.innerHTML = "";
    expenses.forEach((expense) => {
        const historyItem = document.createElement("li");
        historyItem.className = "rub";
        historyItem.innerText = `${expense.category} - ${expense.amount}`;

        historyList.appendChild(historyItem);
    });
};

function render() {
    renderStatus();
    renderHistory();
};

function getExpenseFromUser() {
    let inputExpenseValue = parseInt(inputNode.value);
    if (inputExpenseValue <= 0) {
        alert("я бы тоже хотел таких прибыльных расходов");
        return;
    };
    return inputExpenseValue;
}

function getNewLimitFromUser() {
    let inputLimitValue = parseInt(limitInputNode.value);
    if (inputLimitValue <= 0) {
        alert("Не бывает отрицательных лимитов");
        return;
    };
    return inputLimitValue;
};

const getCategoryFromUser = () => categorySelectNode.value;


const clearInput = () => {
    inputNode.value = "";
};

function addButtonHandler() {
    const currentAmount = getExpenseFromUser();
    if (!currentAmount) {
        alert("введите расход");
        return;
    };

    const currentCategory = getCategoryFromUser();
    if (currentCategory === "выбирайте категорию") {
        alert("выбирайте категорию")
        return;
    };

    const newExpense = { amount: currentAmount, category: currentCategory };

    expenses.push(newExpense);
    localStorage.setItem("history",JSON.stringify(expenses));
    console.log(expenses);
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
    localStorage.setItem("limit", newLimit);

    limitInputNode.value = '';

    togglePopup();
    render();

    return limit;
};

const clearButtonHandler = () => {
    expenses = [];
    render()
};

function initLimit() {
    const limitFromStorage = parseInt(localStorage.getItem("limit"));
    if (!limitFromStorage) {
        return;
    };
    limitNode.innerText = limitFromStorage;

};

function initHistory() {
    const historyFromStorage = JSON.parse(localStorage.getItem("history"));
    if (!historyFromStorage) {
        return;
    };

    expenses = historyFromStorage;
    
    render();
}

addButtonNode.addEventListener("click", addButtonHandler);
clearButtonNode.addEventListener("click", clearButtonHandler);
popupButtonAcceptNode.addEventListener('click', limitChangeButtonHandler);
