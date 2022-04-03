function computerPlay(randomNum) {
    const randomChoice = Math.floor(Math.random() * 3) + 1;
    if (randomChoice === 1) {
        randomNum = "rock";
    }
    else if (randomChoice === 2) {
        randomNum = "paper";
    }
    else {
        randomNum = "scissors";
    }
    return randomNum;
}
// const selection = window.prompt("Make a choice (Rock, Papers, or Scissors).");
function playRound(playerSelection,computerSelection) {
    // playerSelection = selection;
    playerSelection = playerSelection.toLowerCase();
    // computerSelection = computerPlay();
    let results = " ";

    if (playerSelection === "rock" && computerSelection === "rock") {
        results = "Its a tie!";
        return results;
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        results = "You Lose! Paper beats Rock";
        return results;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        results = "You Win! Rock beats scissors";
        return results;
    }
    else if (playerSelection === "paper" && computerSelection === "paper") {
        results = "Its a tie!";
        return results;
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        results = "You Win! Paper beats Rock";
        return results;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        results = "You Lose! Scissors beats paper";
        return results;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        results = "You Lose! Rock beats Scissors";
        return results;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        results = "You Win! Scissors beats Paper";
        return results;
    }
    else {
        results = "Its a tie!"
        return results;
    }
}
// console.log(playRound());
function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Make a choice (Rock, Papers, or Scissors");
        computerSelection = computerPlay();
        console.log(playRound(playerSelection,computerSelection));
    }
}
game();