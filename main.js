// Rock Paper Scissors Game
/* UI Revision to-do list
    1. Add 3 buttons, one for each selection
    2. Display the scores of each player on the UI
    3. Display round winner info
    4. Display game winner info and reset button
*/

// Set variables for all elements in the UI
const buttons = Array.from(document.querySelectorAll('.playerbutton'));
const dispCompScore = document.querySelector('.compscore h4');
const dispPlayerScore = document.querySelector('.playerscore h4');
const stats = document.querySelector('.stats');
const results = document.querySelector('.resultsText');
const reset = document.querySelector('.resetButton');

// Add event listener to reset button to reload page
reset.onclick = function(){
    window.location.reload()
}

// create computer score variable
let compScore = 0;
// create player score variable
let playerScore = 0;

// create computer selection variable
function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

// create playRound function to play the round of rock paper scissors
// increase score dependent on round winner
function playRound(playerSelection, computerSelection){
    if (playerSelection == 'rock' && computerSelection == 'scissors' ||
    playerSelection == 'paper' && computerSelection == 'rock' ||
    playerSelection == 'scissors' && computerSelection == 'paper'){
        playerScore++;
        return `Computer chose ${computerSelection}. Player wins this round!`
    } else if (playerSelection === computerSelection){
        return `Computer chose ${computerSelection}. Round is a draw!`
    } else {
        compScore++;
        return `Computer chose ${computerSelection}. Computer wins this round!`
    }
}

// create game function that will allow for tracking of round numbers and playing them
function playGame(playerSelection){        
    var computerSelection = getComputerChoice();
    stats.textContent = playRound(playerSelection, computerSelection);
    dispPlayerScore.textContent = playerScore;
    dispCompScore.textContent = compScore;
}

// create checkScore function to check for the score of the game after each round
function checkScore(){
    if (playerScore == 5 || compScore == 5 ){
        // disable the buttons when the target score is reached
        buttons.forEach(button => button.disabled = 'true');
        // display the results and the reset button when target score is reached
        reset.style.visibility = 'visible';
        results.style.visibility = 'visible';
        // compare player score to computer score
        if (playerScore === compScore){
            results.textContent = "The game is a draw!"
        } else if (playerScore > compScore){
            results.textContent = "Player wins the game!"
        } else {
            results.textContent = "Computer wins the game!"
        }
    // if score hasnt reached 5 yet, continue playing
    } else {
        return
    }
}

// Add event listeners to each of the buttons to run the game when clicked
buttons.forEach(button => button.addEventListener('click', function(){
    playGame(button.id);
    checkScore()
}));