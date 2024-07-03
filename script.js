let clockHours = document.querySelector(".clock-face-hand-hours");
let clockMinutes = document.querySelector(".clock-face-hand-minutes");
let clockSeconds = document.querySelector(".clock-face-hand-seconds");
let timerSeconds = document.querySelector(".clock-face-countdown-body-seconds");
let timerMinutes = document.querySelector(".clock-face-countdown-body-minutes");
let timerHours = document.querySelector(".clock-face-countdown-body-hours");
let timerDays = document.querySelector(".clock-face-countdown-body-days");
let finalDate = new Date("December 25, 2024 00:00:00");
let countdownSecond = 1000;
let countdownMinute = countdownSecond * 60;
let countdownHour = countdownMinute * 60;
let countdownDay = countdownHour * 24;

let startClock = () => {
  updateTime();
  updateCountdown();
  setInterval(() => {
    updateTime();
    updateCountdown();
  }, 1000);
};

let updateTime = () => {
  let now = new Date();
  let hours = now.getHours() % 12;
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  clockHours.style.transform = `rotate(${(360 / 12) * hours}deg)`;
  clockMinutes.style.transform = `rotate(${(360 / 60) * minutes}deg)`;
  clockSeconds.style.transform = `rotate(${(360 / 60) * seconds}deg)`;
};

let updateCountdown = () => {
  let now = new Date();
  let diff = finalDate - now;
  let diffObj = convert(diff);
  let daysContent = diffObj.days >= 10 ? diffObj.days : "0" + diffObj.days;

  timerDays.textContent = daysContent + " days";
  timerHours.textContent =
    diffObj.hours >= 10 ? diffObj.hours : "0" + diffObj.hours;
  timerMinutes.textContent =
    diffObj.minutes >= 10 ? diffObj.minutes : "0" + diffObj.minutes;
  timerSeconds.textContent =
    diffObj.seconds >= 10 ? diffObj.seconds : "0" + diffObj.seconds;
};

let convert = (ms) => {
  let days = Math.floor(ms / countdownDay);
  let hours = Math.floor((ms % countdownDay) / countdownHour);
  let minutes = Math.floor((ms % countdownHour) / countdownMinute);
  let seconds = Math.floor((ms % countdownMinute) / countdownSecond);
  return { days, hours, minutes, seconds };
};

startClock();
