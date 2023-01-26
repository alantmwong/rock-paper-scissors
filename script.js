/* 

Rock Paper Scissors game
Author: Alan
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

/* playerWinCondition logs the winner and score, and updates the score */

playerWinCondition = (computerSelection) => {
    result.textContent = `The player won, as the computer chose ${computerSelection}`;
    playerScore++;
    score.textContent = `The score is: Player ${playerScore}, Computer ${computerScore}`;
    if (playerScore > 4) {
        winner.textContent = 'Congratulations, you win!';
        playerScore = 0;
        computerScore = 0;
    }
}

/* computerWinCondition logs computer winner, score, and updates the score */

computerWinCondition = (computerSelection) => {
    result.textContent = `The computer won, as the computer chose ${computerSelection}`;
    computerScore++;
    score.textContent = `The score is: Player ${playerScore}, Computer ${computerScore}`;
    if (computerScore > 4) {
        winner.textContent = 'Sorry, you lost to the computer!';
        playerScore = 0;
        computerScore = 0;
    }
}


/* playRockPaperScissors() is a function that receives two inputs, being the 
computerSelection and playerSelection. It outputs the winner of the round, or 
in the event of a tie, it will output "draw". */


playRound = (playerSelection, computerSelection) => {
    if (winner) {
        winner.textContent = '';
    }
    if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection == "scissors") {
            playerWinCondition(computerSelection);
        } else if (computerSelection == "paper") {
            computerWinCondition(computerSelection);
        } else {
            result.textContent = `It is a draw, as the computer chose ${computerSelection}`;
            score.textContent = `The score is: Player ${playerScore}, Computer ${computerScore}`;
        }
    } else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection == "rock") {
            playerWinCondition(computerSelection);
        } else if (computerSelection == "scissors") {
            computerWinCondition(computerSelection);
        } else {
            result.textContent = `It is a draw, as the computer chose ${computerSelection}`;
        }
    } else if (playerSelection.toLowerCase() == "scissors") {
        if (computerSelection == "paper") {
            playerWinCondition(computerSelection);
        } else if (computerSelection == "rock") {
            computerWinCondition(computerSelection);
        } else {
            result.textContent = `It is a draw, as the computer chose ${computerSelection}`;
        }
    }
}

// allow the person to select using a button rather than type
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const result = document.querySelector('.result');
const score = document.querySelector('.score');
const winner = document.querySelector('.winner');

rock.addEventListener('click', () => playRound('rock', getComputerChoice()));
paper.addEventListener('click', () => playRound('paper', getComputerChoice()));
scissors.addEventListener('click', () => playRound('scissors', getComputerChoice()));

