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
