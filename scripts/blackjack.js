let firstCard = 3;
let secondCard = 9;
let sum = firstCard + secondCard;

if (sum <= 20) {
    console.log("Do you want to draw a new card? 🙂")
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack")
} else {
    console.log("You're out of the game")
}

let hasSolvedChallenge = false
let hasHintsLeft = false

// Create an if statement that checks that both variables are false.
// If so, run the showSolution() function
if( hasSolvedChallenge === false && hasHintsLeft === false) {
    showSolution();
}
function showSolution() {
    console.log("Showing the solution....")
}
