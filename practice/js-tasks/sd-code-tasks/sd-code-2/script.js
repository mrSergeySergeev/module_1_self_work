let currentDate;
const dayMessage = 'введите день(от 1 до 31)';
const mounthMessage = 'введите месяц(от 1 до 12)';
const yearMessage = 'введите год(4 чифры, от 1900 до 2050)';
const buttonTask2Node = document.getElementById('button');
const textNode = document.getElementById('text');

const getDayByUser = () => {
    let day = null;
    while (!Number.isInteger(day) || day <= 0 || day > 31) {
        day = parseInt(prompt(dayMessage));
    }
    return day;
};

const getMounthByUser = () => {
    let mounth = null;
    while (!Number.isInteger(mounth) || mounth <= 0 || mounth > 12) {
        mounth = parseInt(prompt(mounthMessage));
    };
    return mounth;
};

const getYearByUser = () => {
    let year = null;
    while (!Number.isInteger(year) || year <= 1900 || year >= 2050) {
        year = parseInt(prompt(yearMessage));
    }
    return year;
};

const buildDate = (day, mounth, year) => {
    currentDate = `${day}/${mounth}/${year}`;
    return currentDate;
};

function renderData(currentDate) {
    textNode.innerText = currentDate;
    console.log(currentDate);
};

const buttonHandler = () => {
    const day = getDayByUser();
    const mounth = getMounthByUser();
    const year = getYearByUser();
    const currentDate = buildDate(day, mounth, year);
    renderData(currentDate);
};

buttonTask2Node.addEventListener('click', buttonHandler);
