//date and time functionality

function getDate() {
  let now = new Date();
  let day = now.getDay();
  let date = now.getDate();
  let month = now.getMonth();
  let year = now.getFullYear();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "Novemeber",
    "December",
  ];

  const dayText = document.getElementById("day");
  dayText.innerHTML = days[day];
  const dateText = document.getElementById("date");
  dateText.innerHTML = date;
  const monthText = document.getElementById("month");
  monthText.innerHTML = months[month];
  const yearText = document.getElementById("year");
  yearText.innerHTML = year;
}

function getTime() {
  setInterval(getTime, 1000);
  let now = new Date();

  let hours = now.getHours();
  if (hours < 10) hours = "0" + hours;
  let mins = now.getMinutes();
  if (mins < 10) mins = "0" + mins;
  let secs = now.getSeconds();
  if (secs < 10) secs = "0" + secs;

  let timeText = document.getElementById("time");
  timeText.innerHTML = `${hours}:${mins}:${secs}`;
}

getTime();
getDate();

// stopwatch functionality
let seconds = 00;
let tens = 00;
const secondsText = document.getElementById("secs");
const tensText = document.getElementById("tens");
const start = document.getElementById("btn-start");
const reset = document.getElementById("btn-reset");
const stop = document.getElementById("btn-stop");
let Interval;

start.onclick = function () {
  clearInterval(Interval);
  Interval = setInterval(startTimer, 10);
};

stop.onclick = function () {
  clearInterval(Interval);
};

reset.onclick = function () {
  clearInterval(Interval);
  seconds = 0;
  tens = 0;
  secondsText.innerHTML = "0" + seconds;
  tensText.innerHTML = "0" + tens;
};

function startTimer() {
  tens++;
  if (tens <= 9) tensText.innerHTML = "0" + tens;
  if (tens > 9) tensText.innerHTML = tens;
  if (tens > 99) {
    seconds++;
    secondsText.innerHTML = "0" + seconds;
    tens = 0;
    tensText.innerHTML = "0" + 0;
  }
  if (seconds > 9) secondsText.innerHTML = seconds;
}

//to do list functionality

const todoInput = document.getElementById("todo-input").value;
const todoSubmit = document.getElementById("todo-add");

function addItem(event) {
  event.preventDefault();
  console.log("clicked");
}

todoSubmit.addEventListener("click", addItem);
