let randomNumber = Math.floor(Math.random() * 10) + 1;
let userGuess;
let attempts = 0;

function startGame() {
userGuess = prompt ("Guess a number between 1 and 10 (or type 999 to exit:");

while (userGuess !== null) {
    if (userGuess === "999"){
        break;
    }
    let guess = Number(userGuess);

    if (isNaN(guess) || guess < 1 || guess > 10 || userGuess.trim() === "") {
        userGuess = prompt("Invalid input. Please enter a valid number between 1 and 10:");
    }
    else if (guess === randomNumber) {
        attempts++;
        alert("Congratulations, You've guessed it in ${attempts} tries!!");
        break;
    }
    else {
        attempts++;
        if (guess < randomNumber) {
            userGuess = prompt("Too low! Guess again:");
        } else {
            userGuess = prompt ("Too high! Guess again:");
        }
        }
    }
}







// Prompt user for a number between 1 and 10, or type 999 to exit.

// Create while loop that continues for as long as the user guesses are incorrect.
// Loop should count the number of guesses.
// Loop should exit if user enters 999 and not display "Too high!"
// If the guess is too low, the user should be promped "Too low!" and be able to guess again.
// If the guess is too high, the user should be promped 'Too high!" and be able to guess again.
// If anything else is entered, the user should be prompted that their input is invalid and 
// to guess again.

// If the guess is correct, the user should be alerted of their win and 
// be told the number of guesses they made.