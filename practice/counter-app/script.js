let addButton = document.querySelector('.js-add-button');
let resetButton = document.querySelector('.js-reset-button');
let counterResult = document.querySelector('.js-counter');
const ACTIVE_IMAGE_CLASSNAME = 'gallery__image-active';
const slidesNodes = Array.from(document.querySelectorAll('.gallery__image'));
console.log(slidesNodes);


let counter = 80;

addButton.addEventListener('click', function () {
    counter = counter + 4;
    console.log(counter);
    counterResult.innerText = counter;
    if (counter >= 100 && counter <= 115) {
        slidesNodes[0].classList.add(ACTIVE_IMAGE_CLASSNAME);
    }
    else
        if (counter >= 116 && counter <= 121) {
            slidesNodes[0].classList.remove(ACTIVE_IMAGE_CLASSNAME);
            slidesNodes[1].classList.add(ACTIVE_IMAGE_CLASSNAME);
        }
        else
            if (counter >= 122 && counter <= 131) {
                slidesNodes[1].classList.remove(ACTIVE_IMAGE_CLASSNAME);
                slidesNodes[2].classList.add(ACTIVE_IMAGE_CLASSNAME);
            }
            else
                if (counter >= 132 && counter <= 142) {
                    slidesNodes[2].classList.remove(ACTIVE_IMAGE_CLASSNAME);
                    slidesNodes[3].classList.add(ACTIVE_IMAGE_CLASSNAME);
                }
                else
                    if (counter >= 143 && counter <= 157) {
                        slidesNodes[3].classList.remove(ACTIVE_IMAGE_CLASSNAME);
                        slidesNodes[4].classList.add(ACTIVE_IMAGE_CLASSNAME);
                    }
                    else
                        if (counter >= 158 && counter <= 163) {
                            slidesNodes[4].classList.remove(ACTIVE_IMAGE_CLASSNAME);
                            slidesNodes[5].classList.add(ACTIVE_IMAGE_CLASSNAME);
                        }
                        else
                            if (counter >= 164) {
                                slidesNodes[5].classList.remove(ACTIVE_IMAGE_CLASSNAME);
                                slidesNodes[6].classList.add(ACTIVE_IMAGE_CLASSNAME);
                            }
});

resetButton.addEventListener('click', function () {
    counter = 80;

    counterResult.innerText = counter;
    slidesNodes[0].classList.remove(ACTIVE_IMAGE_CLASSNAME);
    slidesNodes[1].classList.remove(ACTIVE_IMAGE_CLASSNAME);
    slidesNodes[2].classList.remove(ACTIVE_IMAGE_CLASSNAME);
    slidesNodes[3].classList.remove(ACTIVE_IMAGE_CLASSNAME);
    slidesNodes[4].classList.remove(ACTIVE_IMAGE_CLASSNAME);
    slidesNodes[5].classList.remove(ACTIVE_IMAGE_CLASSNAME);
    slidesNodes[6].classList.remove(ACTIVE_IMAGE_CLASSNAME);
});


