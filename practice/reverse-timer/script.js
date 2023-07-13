const timerDisplayNode = document.querySelector(".timer__displayLeft");
const timerEndNode = document.querySelector(".timer__displayEnd");
const buttonsNode = document.querySelectorAll("[data-time]");
// zapomnit' id setInterval
let countdown;

function timer(seconds) {
  clearInterval(countdown);
  // poly4aem tekyshyu daty
  const currentTime = Date.now();
  // s4itaem moment okon4aniya taimera
  const endTime = currentTime + seconds * 1000;

  displayTimer(seconds);
  displayEndTime(endTime);

  countdown = setInterval(() => {
    //s4itaem ostavshiesya secyndi
    //Math.round okryglyaet eto 4islo
    const secondsLeft = Math.round((endTime - Date.now()) / 1000);

    if (secondsLeft < 0) {
      // o4ishaem taimers, ystanovlennie 4erez setInterval
      clearInterval(countdown);
      return;
    }
    displayTimer(secondsLeft);

    //1000 zdes' - eto one second
  }, 1000);
}

function displayTimer(seconds) {
  // Math.floor okryglyaet do blizhnego men'shego celogo
  //dlya aktyal'nogo vi4isleniya minyt
  const minutes = Math.floor(seconds / 60);
  // % zdes' - eto modyl' 4isla, ostavshegosya ot deleniya
  const reminderSeconds = seconds % 60;
  const initZero = reminderSeconds < 10 ? "0" : "";

  const display = `${minutes}min:${initZero}${reminderSeconds}sec`;

  timerDisplayNode.textContent = display;
  // zdes' vivodim taimer v nazvanie vkladki saita
  document.title = display;
  console.log({ minutes, reminderSeconds });
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minute = end.getMinutes();
  const initZero = minute < 10 ? "0" : "";

  timerEndNode.textContent = `timer over in:${hour}:${initZero}${minute}`;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

function startTimerfromInput(e) {
  e.preventDefault();
  const minutes = parseInt(this.minutes.value);
  timer(minutes * 60);
  this.reset;
}

buttonsNode.forEach((button) => button.addEventListener("click", startTimer));

document.timerForm.addEventListener("submit", startTimerfromInput);
