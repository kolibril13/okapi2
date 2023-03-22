console.log("Hello World!");

// select date-picker-button
let button = document.getElementsByClassName("date-picker-button")[0];

// add event listener to button
button.addEventListener("click", function () {
  let picker = document.getElementsByClassName("date-picker")[0];
  if (picker.style.display == "none") {
    picker.style.display = "block";
  } else {
    picker.style.display = "none";
  }
});

import {startOfMonth, getDaysInMonth, getDay } from 'date-fns'
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

let my_date = new Date(2023, 2) // 2023-03-01 (month is 0-based)
let totaldays = getDaysInMonth(my_date)
let firstDay = getDay(startOfMonth(my_date))
console.log(my_date)
console.log(totaldays)
console.log(days[firstDay])
