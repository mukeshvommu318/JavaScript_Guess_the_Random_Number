let gameResult = document.getElementById("gameResult")
let userInput = document.getElementById("userInput")

let randomNumber = Math.ceil(Math.random() *100)
console.log(randomNumber)

function checkGuess(){
    let guessNumber = parseInt(userInput.value)
    console.log(randomNumber)
    if (guessNumber > randomNumber){
        gameResult.textContent= "Too High! Try Again.";
        gameResult.style.backgroundColor="#1e217c"
    }
    else if (guessNumber < randomNumber){
         gameResult.textContent= "Too Low! Try Again.";
        gameResult.style.backgroundColor="#1e217c"
    }
    else if (guessNumber === randomNumber){
         gameResult.textContent= "Congratulations! you got it right";
        gameResult.style.backgroundColor="green"
    }
    }