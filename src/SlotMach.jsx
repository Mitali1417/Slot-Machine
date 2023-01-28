import React from "react";

var arr = [  "😄" , "😃" , "😲" ];

function Shuffle() {

    let button = document.getElementById("shuffle");
    button.disabled = true;

    let row1 = document.getElementById("row1");
    let row2 = document.getElementById("row2");
    let row3 = document.getElementById("row3");

    let interval = setInterval(() => {
        row1.value = arr[Math.floor(Math.random() * arr.length)];
        row2.value = arr[Math.floor(Math.random() * arr.length)];
        row3.value = arr[Math.floor(Math.random() * arr.length)];
        console.log(row1.value + row2.value + row3.value);
    }, 100);

    setTimeout(() => {
        clearInterval(interval);
        displayHistory(row1, row2, row3);
        button.disabled = false;
    }, 1000);
}


function displayHistory(row1, row2, row3) {

    let recentDisplay = (row1.value + " " + row2.value + " " + row3.value);
    let lastOutput = document.getElementById("lastOutput");

    if (row1.value === row2.value && row2.value === row3.value) {
        row1.classList.add("bingo");
        row2.classList.add("bingo");
        row3.classList.add("bingo");
    }
    else {
        row1.classList.remove("bingo");
        row2.classList.remove("bingo");
        row3.classList.remove("bingo");
       recentDisplay = recentDisplay + "\n";
    }
    lastOutput.value = recentDisplay;
}


export default Shuffle;
