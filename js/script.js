let playerOne = document.querySelector(".playerOne")
let playerOneInput = document.querySelector(".playerOneInput")
let playerOneBtn = document.querySelector(".playerOneBtn")
let playerTwo = document.querySelector(".playerTwo")
let playerTwoInput = document.querySelector(".playerTwoInput")
let playerTwoBtn = document.querySelector(".playerTwoBtn")
let para = document.querySelector(".para")
let count = 3


playerOneBtn.addEventListener("click", () => {
    if (playerOneInput.value > 0 && playerOneInput.value < 10){
        playerOne.style="display: none "
        playerTwo.style="display: block "
    }
    else {
        para.innerHTML = "Please Type a number between 1 to 9"
    }
})
playerTwoBtn.addEventListener("click", () => {
    if (playerTwoInput.value > 0 && playerTwoInput.value < 10){
       if (playerOneInput.value == playerTwoInput.value){
        para.style.color = "greenyeallow"
        para.innerHTML = "Congrats"
        count = 0
       }else if (count > 0){
        para.style.color = "orange"
        para.innerHTML = "Try again! <br> Remainin Chances: " + count-- + "."
       }else{
        para.innerHTML = "Game over! <br> Please reload the page to play again."
        para.style.color = "crimson"
       }
    }
    else {
        para.innerHTML = "Please Type a number between 1 to 9."
    }
})