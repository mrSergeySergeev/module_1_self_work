const buttonTask4Node = document.getElementById('task4');
const textNode = document.getElementById('text');
const promtMessage = 'Введите месяц(от 1 до 12)'
const mounthArray = ['Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',];

const getMounthFromUser = () => {
    let mounth;
    while (!Number.isInteger(mounth) || mounth <= 0 || mounth > 12) {
        mounth = parseInt(prompt(promtMessage));
    };
    return mounth;
};


const getMounthByNumber = () => {
    let mounth = getMounthFromUser();
    mounth = mounthArray[mounth - 1];
    return mounth;
};

const render = (mounth) => {
    textNode.innerText = `вы ввели: ${mounth}`;
    console.log(mounth); 
}

buttonHandler = () => {
    let mounth = getMounthByNumber();
    render(mounth);    
}

buttonTask4Node.addEventListener('click', buttonHandler);
