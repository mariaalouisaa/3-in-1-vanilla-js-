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
let [milliseconds, seconds, minutes] = [0, 0, 0];
let stopwatchText = document.getElementById("stopwatch-text");
let int = null;

function start() {
  if (int !== null) clearInterval(int);
  int = setInterval(startTimer, 10);
}

function stop() {
  clearInterval(int);
}

function reset() {
  clearInterval(int);
  [milliseconds, seconds, minutes] = [0, 0, 0];
  stopwatchText.innerHTML = "00:00:00";
}

function startTimer() {
  milliseconds += 10;

  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;

    if (seconds == 60) {
      seconds = 0;
      minutes++;
    }
  }
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms = milliseconds / 10;
  ms < 10 ? (ms = "0" + ms) : ms;

  stopwatchText.innerHTML = `${m}:${s}:${ms}`;
}

//to do list functionality

const todoInput = document.getElementById("todo-input");
const todoSubmit = document.getElementById("todo-add");
const list = document.getElementById("todo-list");
const clear = document.getElementById("clear-form");
const li = document.querySelectorAll("li");

let chores = JSON.parse(localStorage.getItem("chores") || []);
localStorage.setItem("chores", JSON.stringify(chores));

function showList() {
  chores.forEach((item) => {
    let listItem = document.createElement("li");
    let text = document.createTextNode(item);
    listItem.onclick = function (e) {
      e.target.classList.toggle("striketrough");
    };
    listItem.appendChild(text);
    list.appendChild(listItem);
  });
}

// forEach((li) => li.classList.toggle("striketrough"));

function addItem(event) {
  event.preventDefault();
  if (todoInput.value.trim().length > 0) {
    let listItem = document.createElement("li");
    listItem.onclick = function (e) {
      e.target.classList.toggle("striketrough");
    };
    let text = document.createTextNode(todoInput.value);
    listItem.appendChild(text);
    list.appendChild(listItem);
    chores.push(todoInput.value);
    localStorage.setItem("chores", JSON.stringify(chores));
  }
}

clear.onclick = function () {
  chores = [];
  localStorage.setItem("chores", JSON.stringify(chores));
};

todoSubmit.addEventListener("click", addItem);
showList();

// fullscrean functionality
const clockapp = document.getElementById("clock-app");
const watchapp = document.getElementById("watch-app");
const listapp = document.getElementById("list-app");

function fullClock() {
  clockapp.classList.toggle("fullscreen");
  watchapp.classList.toggle("hidden");
  listapp.classList.toggle("hidden");
}

function fullWatch() {
  watchapp.classList.toggle("fullscreen");
  clockapp.classList.toggle("hidden");
  listapp.classList.toggle("hidden");
}

function fullList() {
  listapp.classList.toggle("fullscreen");
  watchapp.classList.toggle("hidden");
  clockapp.classList.toggle("hidden");
}
