function computerPlay(randomNum) {
    const randomChoice = Math.floor(Math.random() * 3) + 1;
    if (randomChoice === 1) {
        randomNum = "rock";
    }
    else if (randomChoice === 2) {
        randomNum = "paper";
    }
    else {
        randomNum = "sissors";
    }
    return randomNum;
}
function playRound(playerSelection,computerSelection) {
    const playerSelection = window.prompt("Make a choice (Rock, Papers, or Scissors).")
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay;

    // if (playerSelection === "rock" && computerSelection === "rock") {
    //     alert("Its a tie!");
    // }
    
}
