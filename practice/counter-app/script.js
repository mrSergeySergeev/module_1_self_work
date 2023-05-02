let addButton = document.querySelector('.js-add-button');
let resetButton = document.querySelector('.js-reset-button');
let counterResult = document.querySelector('.js-counter');

let counter = 80;

addButton.addEventListener('click', function () {
    counter = counter + 4;
    console.log(counter);
    counterResult.innerText = counter;
});

addButton.addEventListener('click', function() {
    console.log(counter)
});

resetButton.addEventListener('click', function () {
    counter = 80;

    counterResult.innerText = counter;
});

const ACTIVE_IMAGE_CLASSNAME = 'gallery__image-active';
const slidesNodes = Array.from(document.querySelectorAll('.gallery__image'));
console.log(slidesNodes);

if (counter >= 100 && counter <= 115) {
    slidesNodes[0].classList.add(ACTIVE_IMAGE_CLASSNAME);
}
else
    if (counter >= 116 && counter <= 121) {
        slidesNodes[0].classList.remove(ACTIVE_IMAGE_CLASSNAME);
        slidesNodes[1].classList.add(ACTIVE_IMAGE_CLASSNAME);
    }