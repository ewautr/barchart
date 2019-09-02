"use strict";
const arr = [];
let i;

function makeChart() {
  buildArray();
  changeHeight();
}

function changeHeight() {
  for (i = 0; i < arr.length; i++) {
    document.querySelector(".bar" + (i + 1)).classList.remove("hidden");
    document.querySelector(".bar" + (i + 1)).style.height = arr[i] + "rem";
    document.querySelector(".bar" + (i + 1)).style.transition =
      "all linear .2s";
    if (arr[i] > 30) {
      document.querySelector(".bar" + (i + 1)).style.background = "#FFBFE9";
    } else if (arr[i] > 20) {
      document.querySelector(".bar" + (i + 1)).style.background = "#BF8FAF";
    } else if (arr[i] > 10) {
      document.querySelector(".bar" + (i + 1)).style.background = "#9C758E";
    } else {
      document.querySelector(".bar" + (i + 1)).style.background = "#6B5062";
    }
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

setInterval(makeChart, 1000);
