console.log("Hello World!");

// select date-picker-button
let buttonX = document.getElementsByClassName("date-picker-button")[0];

// select element date-picker-grid-dates
let grid = document.getElementsByClassName("date-picker-grid-dates")[0];

// add event listener to button
buttonX.addEventListener("click", function () {
  let picker = document.getElementsByClassName("date-picker")[0];
  if (picker.style.display == "none") {
    picker.style.display = "block";
  } else {
    picker.style.display = "none";
  }
});

import {
  startOfMonth,
  startOfWeek,
  getDaysInMonth,
  getDay,
  getWeekOfMonth,
  isSunday,
} from "date-fns";
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let my_date = new Date(2020, 9); // 2022-10-01 (month is 0-based)
let my_year = my_date.getFullYear();
let my_month = my_date.getMonth();
let prev_month_total = getDaysInMonth(new Date(my_year, my_month - 1));
let next_month_total = getDaysInMonth(new Date(my_year, my_month + 1));
let my_month_total = getDaysInMonth(my_date);

let last_sunday = startOfWeek(my_date);
console.log(last_sunday);
let dates_of_month = [];

if (!my_date.isSunday) {
  for (let i = last_sunday.getDate() - 1; i < prev_month_total; i++) {
    let d = new Date(my_year, my_month - 1, i + 1);
    let d_i = d.getDate();
    let button = document.createElement("button");
    button.className = "date date-picker-other-month-date";
    button.innerHTML = d_i;
    button.data = d;
    grid.appendChild(button);
    dates_of_month.push(button);
  }
}

for (let i = 0; i < my_month_total; i++) {
  let d = new Date(my_year, my_month, i + 1);
  let d_i = d.getDate();
  let button = document.createElement("button");
  button.className = "date";
  button.innerHTML = d_i;
  button.data = d;
  grid.appendChild(button);
  dates_of_month.push(button);
}

dates_of_month.forEach((date) => {
  date.addEventListener("click", e => {
    console.log(e.target.data);
    let date = e.target.data;
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();
    let formatted_date = month + "/" + day + "/" + year;
    buttonX.innerHTML = formatted_date;
    let picker = document.getElementsByClassName("date-picker")[0];
    picker.style.display = "none";

  });
});
