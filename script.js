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

game = () => {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose rock, paper, or scissors: ");
        let computerSelection = getComputerChoice();
        playRockPaperScissors(playerSelection, computerSelection);

    }
}

game();
