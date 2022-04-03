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

function playRound(playerSelection,computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    let results = " ";

    if (playerSelection === "rock" && computerSelection === "rock") {
        results = "Its a tie!";
        return results;
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        results = "You Lose! Paper beats Rock";
        computerScore++
        return results;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        results = "You Win! Rock beats scissors";
        playerScore++
        return results;
    }
    else if (playerSelection === "paper" && computerSelection === "paper") {
        results = "Its a tie!";
        return results;
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        results = "You Win! Paper beats Rock";
        +playerScore++
        return results;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        results = "You Lose! Scissors beats paper";
        computerScore++
        return results;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        results = "You Lose! Rock beats Scissors";
        computerScore++
        return results;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        results = "You Win! Scissors beats Paper";
        playerScore++
        return results;
    }
    else {
        results = "Its a tie!"
        return results;
    }
}

function game() {
    playerScore = parseInt(0);
    computerScore = parseInt(0);
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Make a choice (Rock, Papers, or Scissors");
        computerSelection = computerPlay();
        console.log(playRound(playerSelection,computerSelection));
        console.log("Player score: " + playerScore);
        console.log("Computer score: " + computerScore);
    }
    if(playerScore > computerScore) {
        console.log("Player Wins!");
    }
    else if (playerScore < computerScore) {
        console.log("Computer Wins!");
    }
    else {
        console.log("Draw!");
    }

}
game();