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
            return "player"
        } else if (computerSelection == "paper") {
            return "computer"
        } else {
            return "draw"
        }
    } else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection == "rock") {
            return "player"
        } else if (computerSelection == "scissors") {
            return "computer"
        } else {
            return "draw"
        }
    } else if (playerSelection.toLowerCase() == "scissors") {
        if (computerSelection == "paper") {
            return "player"
        } else if (computerSelection == "rock") {
            return "computer"
        } else {
            return "draw"
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

/* printResults is a function that prints the winner of the round (or states if it were a tie) and 
    lets the user know the current score.  */ 

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
game = () => {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose rock, paper, or scissors: ");
        let computerSelection = getComputerChoice();
        let result = playRockPaperScissors(playerSelection, computerSelection);
        updateScore(result);
        printResults(result, playerScore, computerScore);
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