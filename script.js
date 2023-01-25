/* 

Rock Paper Scissors game
Author: Alan Wong
Date: 18/01/2023

*/

let playerScore = 0;
let computerScore = 0;

/* getComputerChoice() returns a string which is a random choice between 
"rock", "paper", "scissors". */

getComputerChoice = () => {
    computerRandomInteger = Math.floor(Math.random() * 3)
    if (computerRandomInteger == 0) {
        return "rock";
    } else if (computerRandomInteger == 1){
        return "paper";
    } else {
        return "scissors"
    }
}

/* playRockPaperScissors() is a function that receives two inputs, being the 
computerSelection and playerSelection. It outputs the winner of the round, or 
in the event of a tie, it will output "draw". */


playRound = (playerSelection, computerSelection) => {
    if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection == "scissors") {
            console.log("player");
        } else if (computerSelection == "paper") {
            console.log("computer");
        } else {
            console.log("draw");
        }
    } else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection == "rock") {
            console.log("player");
        } else if (computerSelection == "scissors") {
            console.log("computer");
        } else {
            console.log("draw");
        }
    } else if (playerSelection.toLowerCase() == "scissors") {
        if (computerSelection == "paper") {
            console.log("player");
        } else if (computerSelection == "rock") {
            console.log("computer");
        } else {
            console.log("draw");
        }
    }
}

/* updateScore evaluates who won and determines whether to add a score to 
their total. If it is a draw, then no one earns a score. */

updateScore = (result) => {
    if (result == "player") {
        playerScore++;
    } else if (result == "computer"){
        computerScore++;
    } 
}

/* printResults is a function that prints the winner of the round (or 
states if it were a tie) and lets the user know the current score.  */ 

printResults = (result, playerScore, computerScore) => {
    if (result == "player") {
        console.log(`You have won this round! Player score: ${playerScore} 
                        Computer score: ${computerScore}`);
    } else if (result == "computer") {
        console.log(`The computer won this round! Player score: ${playerScore} 
                        Computer score: ${computerScore}`);
    } else if (result == "draw") {
        console.log(`It was a tie. Player score: ${playerScore} Computer score:
         ${computerScore}`);
    }
}
/* game() is a function that will use a for loop to call the playRockPaperScissors()
function 5 times. The game() function should also keep score and report the 
winner or loser at the end. */
game = () => {
    let playerSelection = prompt("Choose rock, paper, or scissors: ");
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    updateScore(result);
    printResults(result, playerScore, computerScore);
}

// game();
// allow the person to select using a button rather than type
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

rock.addEventListener('click', () => playRound('rock', getComputerChoice()));
paper.addEventListener('click', () => playRound('paper', getComputerChoice()));
scissors.addEventListener('click', () => playRound('scissors', getComputerChoice()));

