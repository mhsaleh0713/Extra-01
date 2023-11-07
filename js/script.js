let playerone = document.getElementById("playerOne");
let playerOneInput = document.getElementById("playerOneInput");
let playerOneBtn = document.getElementById("playerOneBtn");
let playerTwo = document.getElementById("playerTwo");
let playerTwoInput = document.getElementById("playerTwoInput");
let playerTwoBtn = document.getElementById("playerTwoBtn");
let para = document.getElementById("para");
let count = 3;

playerOneBtn.addEventListener("click", () => {
  if (playerOneInput.value > 0 && playerOneInput.value < 10) {
    playerOne.style.display = "none";
    playerTwo.style.display = "block";
  } else {
    para.innerHTML = "Please type a number between 1 to 9.";
  }
});

playerTwoBtn.addEventListener("click", () => {
  if (playerTwoInput.value > 0 && playerTwoInput.value < 10) {
    if (count > 0) {
      if (playerOneInput.value == playerTwoInput.value) {
        para.style.color = "greenyeallow";
        para.innerHTML = "Congrats. <br> Reload the page to play again!";
      } else {
        para.style.color = "crimson";
        para.innerHTML = "Try again. <br> Remaining Chances:  " + count-- + ".";
      }
    } else {
      para.style.color = "crimson";
      para.innerHTML = "Game over! <br> Reload the page to play again!";
      count = 0;
    }
  } else {
    para.style.color = "crimson";
    para.innerHTML = "Please type a number between 1 to 9.";
  }
});
