let playerScore = 0;
let computerScore = 0;

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

playRockPaperScissors = (playerSelection, computerSelection) => {
    if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection == "scissors") {
            return `You win! ${playerSelection.toLowerCase()} beats ${computerSelection}`
        } else if (computerSelection == "paper") {
            return `You Lose! ${computerSelection} beats ${playerSelection.toLowerCase()}`
        } else {
            return `It's a tie. Both chose ${computerSelection}`
        }
    } else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection == "rock") {
            return `You win! ${playerSelection.toLowerCase()} beats ${computerSelection}`
        } else if (computerSelection == "scissors") {
            return `You Lose! ${computerSelection} beats ${playerSelection.toLowerCase()}`
        } else {
            return `It's a tie. Both chose ${computerSelection}`
        }
    } else if (playerSelection.toLowerCase() == "scissors") {
        if (computerSelection == "paper") {
            return `You win! ${playerSelection.toLowerCase()} beats ${computerSelection}`
        } else if (computerSelection == "rock") {
            return `You Lose! ${computerSelection} beats ${playerSelection.toLowerCase()}`
        } else {
            return `It's a tie. Both chose ${computerSelection}`
        }
    }
}

/* updateScore evaluates who won and determines whether to add a score to their total. If it is a 
    draw, then no one earns a score. */

updateScore = (result) => {
    if (result == "player") {
        playerScore++;
    } else if (result == "computer"){
        computerScore++;
    } 
}


game = () => {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose rock, paper, or scissors: ");
        let computerSelection = getComputerChoice();
        let result = playRockPaperScissors(playerSelection, computerSelection);
        updateScore(result);

    }
}

game();

/*

getComputerChoice() returns a string which is a random choice between "rock", "paper", "scissors". 

playRockPaperScissors() is a function that receives two inputs, being the computerSelection and playerSelection.

computerSelection is determined by the random getComputerChoice() function. playerSelection is determined by 
the user input that is done by prompting the user via prompt(). 

game() is a function that will use a for loop to call the playRockPaperScissors() function 5 times. The game()
function should also keep score and report the winner or loser at the end. 

    The score should mean that there's variables playerScore and computerScore to track it, and each time either
    a player or computer wins, it increments their score. 

    To report the winner or loser at the end, we need to determine who won, and then by that, print out a statement
    that they won that round, and display the score with it. 
    

*/