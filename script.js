"use strict";

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
// document.querySelector(".number").textContent = number;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (guess > 20 || guess < 0) {
    document.querySelector(".message").textContent =
      "Please Enter Number bewteen 1 and 20!";
  } else if (guess === number) {
    // document.querySelector(".number").textContent = number;
    document.querySelector(".message").textContent = "Correct Number! 🎉";
    document.querySelector("body").style.backgroundColor = "green";
    if (score > highscore) {
      document.querySelector(".highscore").textContent = score;
    }
  } else if (!guess) {
    document.querySelector(".message").textContent = "Not a Number";
  } else if (guess !== number) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > number ? "Guess too High" : "Guess too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost";
    }
  }
  document.querySelector(".guess").value = " ";
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
  number = Math.trunc(Math.random() * 20) + 1;
  //   document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = " ";
  score = 20;
  document.querySelector(".score").textContent = score;
});
