let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    let guessInput = document.getElementById("guess");
    let guess = Number(guessInput.value);
    let result = document.getElementById("result");
    let playAgainBtn = document.getElementById("playAgain");

    if (!guess) {
        result.innerText = " Please enter a number!";
        return;
    }

    attempts++;

    if (guess === randomNumber) {
        result.innerText = " Congratulations! You guessed it right in " + attempts + " attempts!";
        playAgainBtn.style.display = "inline-block";
    } 
    else if (guess > randomNumber) {
        result.innerText = " Too high! Try again.";
    } 
    else {
        result.innerText = " Too low! Try again.";
    }

    // clear input after every check
    guessInput.value = "";
    
    // bring cursor back to input box
    guessInput.focus();
}