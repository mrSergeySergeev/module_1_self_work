const counterValue = document.querySelector('[data-sum="sumValue"]');
const questionValue = document.querySelector('[data-question="questionValue"]');
const addOneItemButton = document.getElementById("addOneItemButton");
const resetButton = document.getElementById("resetButton");
const ACTIVE_RESET_BUTTON_CLASSNAME = 'counter__reset-button-active';

const QUESTION_INITIAL_VALUE = 'Как правильно пить «на посошок»';
const FIRST_ITEM = 'Застольная - в знак уважения к остающимся';
const SECOND_ITEM = 'Подъёмная - при покидании стола';
const THIRD_ITEM = 'На ход ноги - движение от стола';
const FOURTH_ITEM = 'Запорожская - при преодолении порога помещения';
const FIFTH_ITEM = 'Придворная - при выходе во двор';
const SIXTH_ITEM = 'На посошок - гостю вручали посох и ставили на него рюмку';
const SEVENTH_ITEM = 'Стременная - прежде чем поставил ногу в стремя';
const EIGHTH_ITEM = 'Седельная - за то, что поднялся в седло';
const NINTH_ITEM = 'Приворотная - перед выездом за ворота';
const TENTH_ITEM = 'Заворотная - за то, что всё-таки сумел выехать';
const ELEVENTH_ITEM = 'Или всё-таки ночевать останемся?';

let question = QUESTION_INITIAL_VALUE;
questionValue.innerText = question;

const COUNTER_INITIAL_VALUE = 0;

let counter = COUNTER_INITIAL_VALUE;
counterValue.innerText = counter;

addOneItemButton.addEventListener("click", function () {
    counter = counter + parseInt(addOneItemButton.dataset.item);
    counterValue.innerText = counter;
    if (counter === 1) {
        question = FIRST_ITEM;
        questionValue.innerText = question;
    } else if (counter === 2) {
        question = SECOND_ITEM;
        questionValue.innerText = question;
    }
    else if (counter === 3) {
        question = THIRD_ITEM;
        questionValue.innerText = question;
    }
    else if (counter === 4) {
        question = FOURTH_ITEM;
        questionValue.innerText = question;
    }
    else if (counter === 5) {
        question = FIFTH_ITEM;
        questionValue.innerText = question;
    }
    else if (counter === 6) {
        question = SIXTH_ITEM;
        questionValue.innerText = question;
    }
    else if (counter === 7) {
        question = SEVENTH_ITEM;
        questionValue.innerText = question;
    }
    else if (counter === 8) {
        question = EIGHTH_ITEM;
        questionValue.innerText = question;
    }
    else if (counter === 9) {
        question = NINTH_ITEM;
        questionValue.innerText = question;
    }
    else if (counter === 10) {
        question = TENTH_ITEM;
        questionValue.innerText = question;
    }
    else if (counter === 11) {
        question = ELEVENTH_ITEM;
        questionValue.innerText = question;
        resetButton.classList.add(ACTIVE_RESET_BUTTON_CLASSNAME);
    }
    else {
        question = QUESTION_INITIAL_VALUE;
        questionValue.innerText = question;
        counter = COUNTER_INITIAL_VALUE;
        counterValue.innerText = counter;
        resetButton.classList.remove(ACTIVE_RESET_BUTTON_CLASSNAME);
    }

})

resetButton.addEventListener("click", function () {
    counter = COUNTER_INITIAL_VALUE;
    question = QUESTION_INITIAL_VALUE;
    counterValue.innerText = counter;
    questionValue.innerText = question;
    resetButton.classList.remove(ACTIVE_RESET_BUTTON_CLASSNAME);
})