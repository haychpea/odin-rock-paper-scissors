// Rock Paper Scissors Game

// create computer score variable
let compScore = 0;
// create player score variable
let playerScore = 0;
// create computer selection variable
function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}
// create player selection variable
function getPlayerChoice(){
    let userPrompt = prompt("What is your choice? Rock, paper or scissors?").toLowerCase();
    if (userPrompt === 'rock' || userPrompt === 'paper' || userPrompt === 'scissors'){
        return userPrompt
    } else {
        return "invalid input, computer wins round"
    }
}

// create playRound function to play the round of rock paper scissors
// increase score dependent on round winner
function playRound(playerSelection, computerSelection){
    if (playerSelection == 'rock' && computerSelection == 'scissors' ||
    playerSelection == 'paper' && computerSelection == 'rock' ||
    playerSelection == 'scissors' && computerSelection == 'paper'){
        playerScore++;
        return "Player wins this round"
    } else if (playerSelection === computerSelection){
        return "Round is a draw, neither player gets a point"
    } else {
        compScore++;
        return "Computer wins this round"
    }
}

// create resetGame function that will reset the game at the point it is called
function resetGame(){
    console.log("Press enter to reset")
    document.addEventListener('keyup', function (event) {
        if (event.key == 'Enter')
            window.location.reload();
    });
}

// define variable to keep track of round number
let round = 0;

// create game function that will allow for tracking of round numbers and playing them
function game(){
    while (round < 5){
        var playerSelection = getPlayerChoice();
        var computerSelection = getComputerChoice();
        console.log("------------------------------------")
        console.log(`Round number: ${round+1}`);
        console.log(`Player chose ${playerSelection}`)
        console.log(`Computer chose ${computerSelection}`)
        console.log(playRound(playerSelection, computerSelection))
        round++;
    }
    console.log("------------------------------------")
    console.log("The final scores are:")
    console.log(`Player: ${playerScore}, Computer: ${compScore}`)
    if (playerScore === compScore){
        console.log("The game is a draw")
        resetGame()
    } else if (playerScore > compScore){
        console.log("Player wins the game")
        resetGame()
    } else {
        console.log("Computer wins the game")
        resetGame()
    }
}


game()
/* OLD CODE BELOW

// create computer choice function
function setCompChoice(){
    // create random num between 1 and 3
    let i = Math.floor(Math.random() * 4) ;
    // if num is 1
    if (i === 1){
        // computer selection is rock
        compSelection = 'rock'
    }
    // else if num is 2
    else if (i === 2){
        // computer selection is paper
        compSelection = 'paper'
    }
    // else if num is 3
    else if (i === 3){
        // computer selection is scissors
        compSelection = 'scissors'
    }
    // else throw error
    console.log(compSelection)
}

// create user choice function
function setUserChoice(){
    // define variable to check for valid user input
    let userChoiceCheck = true;
    // create while loop to continuously ask for correct input
    while (userChoiceCheck){
        // prompt user for choice, make case insensitive
        let userPrompt = prompt("What is your choice? Rock, Paper or Scissors?").toLowerCase();
        // if user prompt is equal to rock, paper or scissors
        if (userPrompt === "rock" || userPrompt === "paper" || userPrompt === "scissors"){
            // set player selection to prompt
            playerSelection = userPrompt;
            // update choice check to end while loop
            userChoiceCheck = false;
        }
        // else
        else {
            // ask user for correct choice
            console.log("Incorrect choice, please choose again.")
        }
        console.log(playerSelection)
    }
    }

console.log("Computer selection: " + compSelection)

// create playRound function with player selection and computer selection as arguments
function playRound(){
    // if player selection equals computer selection
    if (playerSelection === compSelection){
        // console log "draw, both gain point"
        console.log("Draw, both players get a point!")
        // player score and computer score increased by 1
        playerScore++;
        compScore++;
    }
    // else if player selection != computer selection
    else if (playerSelection != compSelection){
        // switch player selection
        switch (playerSelection){
            // case rock
            case 'rock':
                // if computer selection is paper
                if (compSelection === 'paper'){
                    // computer score + 1
                    compScore++;
                    // return computer wins a point
                    return("Computer wins a point");
                }
                // else if computer selection is scissors
                else if (compSelection === 'scissors'){
                    // console log player wins
                    return("Player wins a point");
                    // player score + 1
                    playerScore++;
                    // reset round
                }
            // case paper
            case 'paper':
                // if computer selection is rock
                if (compSelection === 'rock'){
                    // console log player wins
                    return("Player wins a point");
                    // player score + 1
                    playerScore++;
                    // reset round
                }
                // else if computer selection is scissors
                else if (compSelection === 'scissors'){
                    // console log computer wins
                    console.log("Computer wins a point");
                    // computer score + 1
                    compScore++;
                    // reset round
                }
            // case scissors
            case 'scissors':
                // if computer selection is rock
                if (compSelection === 'rock'){
                    // console log computer wins
                    console.log("Computer wins a point");
                    // computer score + 1
                    compScore++;
                    // reset round
                }
                // else if computer selection is paper
                else if (compSelection === 'paper'){
                    // console log player wins
                    console.log("Player wins a point");
                    // player score + 1
                    playerScore++
                    // reset round
                }
            }
        }
    }

// create resetGame function
function resetGame(){
    // reload html page
    document.reload()
}
    
//while round count is less than 5
while (roundCount < 5){
    // computer choice function
    setCompChoice()
    // playRound
    playRound()
    // round count + 1
    roundCount++;
}

// if round count = 5
    // if player score === computer score
        // console log the game is a draw, thanks for playing
        // reset game
    // else if player score > computer score
        // console log player wins
        // reset game
    // else if computer score > player score
        // console log computer wins
        // reset game
// else
    // return false

*/