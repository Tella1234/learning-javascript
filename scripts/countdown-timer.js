
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const daysElXmas = document.getElementById("xmas-days");
const hoursElXmas = document.getElementById("xmas-hours");
const minutesElXmas = document.getElementById("xmas-minutes");
const secondsElXmas = document.getElementById("xmas-seconds");

const newYear = '1 Jan 2023';
const xMas = '25 Dec 2022';


function countdownNewYear() {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);


}
function countdownXMas() {
    const xMasDate = new Date(xMas);
    const currentDate = new Date();

    const totalSeconds = (xMasDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysElXmas.innerHTML = days;
    hoursElXmas.innerHTML = formatTime(hours);
    minutesElXmas.innerHTML = formatTime(minutes);
    secondsElXmas.innerHTML = formatTime(seconds);


}


function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

countdownNewYear();

setInterval(countdownNewYear, 1000);

countdownXMas();

setInterval(countdownXMas, 1000);