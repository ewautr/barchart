"use strict";
const arr = [];
let i;

function makeChart() {
  buildArray();
  changeHeight();
}

function changeHeight() {
  for (i = 0; i < arr.length; i++) {
    document.querySelector(".bar" + (i + 1)).style.height = arr[i] + "rem";
  }
}

function buildArray() {
  function getNumberOfCustomers() {
    return Math.floor(Math.random() * 36);
  }
  let barHeight = getNumberOfCustomers();

  if (arr.length > 39) {
    arr.push(barHeight);
    arr.shift();
  } else {
    arr.push(barHeight);
  }
  console.clear();
  console.log(arr);
}

setInterval(makeChart, 100);
