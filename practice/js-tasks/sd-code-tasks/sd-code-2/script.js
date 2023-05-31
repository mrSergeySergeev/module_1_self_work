let currentDate;
const dayMessage = 'введите день(от 1 до 31)';
const mounthMessage = 'введите месяц(от 1 до 12)';
const yearMessage = 'введите год(4 чифры, от 1900 до 2050)';
const buttonTask2Node = document.getElementById('button');
const textNode = document.getElementById('text');

const buildDate = (day, mounth, year) => {
    currentDate = `${day}/${mounth}/${year}`;
    return currentDate;
};

const buttonHandler = () => {
    const day = parseInt(prompt(dayMessage));
    if (day <= 0 || day > 31 || !Number.isFinite(day)) {
        alert('error');
        return;
    };
    const mounth = parseInt(prompt(mounthMessage));
    if (mounth <=0 || mounth > 12 || !Number.isFinite(mounth)) {
        alert('error');
        return;
    };
    const year = parseInt(prompt(yearMessage));
    if (year <= 1900 || year > 2050 || !Number.isFinite(year)) {
        alert('error');
        return;
    };

    buildDate(day, mounth, year);

    textNode.innerText = currentDate;
    console.log(currentDate);
}

buttonTask2Node.addEventListener('click', buttonHandler);
