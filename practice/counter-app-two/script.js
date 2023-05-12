const counterValue = document.querySelector('[data-sum="sumValue"]');
const questionValue = document.querySelector('[data-question="questionValue"]');
const addOneItemButton = document.getElementById("addOneItemButton");
const resetButton = document.getElementById("resetButton");
const ACTIVE_RESET_BUTTON_CLASSNAME = 'counter__reset-button-active';

const ARRAY_OF_ITEMS = ['Как правильно пить «на посошок»','Застольная - в знак уважения к остающимся','Подъёмная - при покидании стола','На ход ноги - движение от стола','Запорожская - при преодолении порога помещения','Придворная - при выходе во двор','На посошок - гостю вручали посох и ставили на него рюмку','Стременная - прежде чем поставил ногу в стремя','Седельная - за то, что поднялся в седло','Приворотная - перед выездом за ворота','Заворотная - за то, что всё-таки сумел выехать','Или всё-таки ночевать останемся?'];

let question = ARRAY_OF_ITEMS[0];
questionValue.innerText = question;

const COUNTER_INITIAL_VALUE = 0;

let counter = COUNTER_INITIAL_VALUE;
counterValue.innerText = counter;

addOneItemButton.addEventListener("click", function () {
    counter = counter + parseInt(addOneItemButton.dataset.item);
    counterValue.innerText = counter;
    if (counter === 1) {
        question = ARRAY_OF_ITEMS[1];
        questionValue.innerText = question;
        return;
    } 
    if (counter === 2) {
        question = ARRAY_OF_ITEMS[2];
        questionValue.innerText = question;
        return;
    }
    if (counter === 3) {
        question = ARRAY_OF_ITEMS[3];
        questionValue.innerText = question;
        return;
    }
    if (counter === 4) {
        question = ARRAY_OF_ITEMS[4];
        questionValue.innerText = question;
        return;
    }
    if (counter === 5) {
        question = ARRAY_OF_ITEMS[5];
        questionValue.innerText = question;
        return;
    }
    if (counter === 6) {
        question = ARRAY_OF_ITEMS[6];
        questionValue.innerText = question;
        return;
    }
    if (counter === 7) {
        question = ARRAY_OF_ITEMS[7];
        questionValue.innerText = question;
        return;
    }
    if (counter === 8) {
        question = ARRAY_OF_ITEMS[8];
        questionValue.innerText = question;
        return;
    }
    if (counter === 9) {
        question = ARRAY_OF_ITEMS[9];
        questionValue.innerText = question;
        return;
    }
    if (counter === 10) {
        question = ARRAY_OF_ITEMS[10];
        questionValue.innerText = question;
        return;
    }
    if (counter === 11) {
        question = ARRAY_OF_ITEMS[11];
        questionValue.innerText = question;
        resetButton.classList.add(ACTIVE_RESET_BUTTON_CLASSNAME);
    }
    else {
        question = ARRAY_OF_ITEMS[0];
        questionValue.innerText = question;
        counter = COUNTER_INITIAL_VALUE;
        counterValue.innerText = counter;
        resetButton.classList.remove(ACTIVE_RESET_BUTTON_CLASSNAME);
        return;
    }

})

resetButton.addEventListener("click", function () {
    counter = COUNTER_INITIAL_VALUE;
    question = QUESTION_INITIAL_VALUE;
    counterValue.innerText = counter;
    questionValue.innerText = question;
    resetButton.classList.remove(ACTIVE_RESET_BUTTON_CLASSNAME);
})