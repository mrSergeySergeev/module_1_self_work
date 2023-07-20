const containerNode = document.querySelector('.container');
const boredStatusNode = document.querySelector('.boredStatus');
const boredActionNode = document.querySelector('.boredAction');
const boredButton = document.querySelector('button');

const INIT_NOT_BORED_STATUS = 'Ура, теперь не скучно 🔥';

const boredGoOff = () => {
    console.log('function')
    fetch('http://www.boredapi.com/api/activity')
        .then(data => data.json())
        .then((res) => {
            boredStatusNode.innerHTML = INIT_NOT_BORED_STATUS
            boredActionNode.innerHTML = res.activity
            containerNode.classList.add('containerActive')
        })
};

boredButton.addEventListener('click', boredGoOff);