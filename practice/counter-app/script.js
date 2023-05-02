let addButton = document.querySelector('.js-add-button') ;
let resetButton = document.querySelector('.js-reset-button');
let counterResult = document.querySelector('.js-counter');

let counter = 80;

addButton.addEventListener('click', function() {
    counter = counter + 4;
    console.log(counter)
    counterResult.innerText = counter;
    return counter;
});

resetButton.addEventListener('click', function() {
    counter = 80;

    counterResult.innerText = counter;
});

if (counter >= 100) { } 