var inputDate = "1/1/2023";

const daysEl = document.getElementById("days")
const hoursEl = document.getElementById("hours")
const minsEl = document.getElementById("mins")
const secondsEl = document.getElementById("seconds")


function countdownTimer() {
    const newDate = new Date(inputDate);
    const currentDate = new Date();

    const totalSeconds = Math.floor((newDate - currentDate) / 1000);

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
};
function formatTime(time){
    return time<10 ? (`0${time}`):time;
}

countdownTimer();

star = setInterval(countdownTimer, 1000);

const btn1 = document.getElementById("btn1");
const words = document.getElementById("color");
btn1.onclick = function () {
    words.innerHTML = prompt("请输入新的日期时间");
};

const btn2 = document.getElementById("btn2");
btn2.onclick = function () {
    inputDate = prompt("请输入新的日期时间");
};

var flag = true
const btn3 = document.getElementById("btn3");
btn3.onclick = function () {
    if (flag) {
        clearInterval(star);
        flag = false;
    }
    else {
        star = setInterval(countdownTimer, 1000);
    };
};



