"use strict";

console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct number!";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

//to get field value, we need to use ".value";
document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
