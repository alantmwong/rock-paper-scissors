getComputerChoice = () => {
    computerRandomInteger = Math.floor(Math.random() * 3)
    if (computerChoice == 0) {
        return "rock";
    } else if (computerChoice == 1){
        return "paper";
    } else {
        return "scissors"
    }
}

playRockPaperScissors = (playerSelection, computerSelection) => {
    if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection == "scissors") {
            return `You win! ${playerSelection.toLowerCase} beats ${computerSelection}`
        } else if (computerSelection == "paper") {
            return `You Lose! ${computerSelection} beats ${playerSelection.toLowerCase}`
        } else {
            return `It's a tie. Both chose ${computerSelection}`
        }
    } else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection == "rock") {
            return `You win! ${playerSelection.toLowerCase} beats ${computerSelection}`
        } else if (computerSelection == "scissors") {
            return `You Lose! ${computerSelection} beats ${playerSelection.toLowerCase}`
        } else {
            return `It's a tie. Both chose ${computerSelection}`
        }
    } else if (playerSelection.toLowerCase() == "scissors") {
        if (computerSelection == "paper") {
            eturn `You win! ${playerSelection.toLowerCase} beats ${computerSelection}`
        } else if (computerSelection == "rock") {
            return `You Lose! ${computerSelection} beats ${playerSelection.toLowerCase}`
        } else {
            return `It's a tie. Both chose ${computerSelection}`
        }
    }
}


