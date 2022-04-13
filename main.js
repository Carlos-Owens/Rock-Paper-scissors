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

function game() {
    playerScore = parseInt(0);
    computerScore = parseInt(0);

         const buttons = document.querySelectorAll("button"); 
 
         buttons.forEach((button) => {
             button.addEventListener("click", () => {
                playerSelection = button.className;
                computerSelection = computerPlay();
                gameStatus.textContent = (playRound(playerSelection,computerSelection));
                playerWin.textContent = "Player Score: " + playerScore;
                computerWin.textContent = "Computer Score: " + computerScore;
                
                endgame();
             });
         });
 
function playRound(playerSelection,computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    let results = " ";

    if (playerSelection === "rock" && computerSelection === "rock") {
        results = "Its a tie!";
        return results;
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        results = "You Lose! Paper beats Rock";
        return results;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        results = "You Win! Rock beats scissors";
        return results;
    }
    else if (playerSelection === "paper" && computerSelection === "paper") {
        results = "Its a tie!";
        return results;
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        results = "You Win! Paper beats Rock";
        return results;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        results = "You Lose! Scissors beats paper";
        return results;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        results = "You Lose! Rock beats Scissors";
        return results;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        results = "You Win! Scissors beats Paper";
        return results;
    }
    else {
        results = "Its a tie!"
        return results;
    }
}

function endgame () {
    if (playerScore === 5) {
        endResults.textContent = "Player Wins!";

        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        document.getElementById("3").disabled = true;

        const playAgain = document.createElement("button");
        playAgain.textContent = "Play Again!";
        resultsDiv.appendChild(playAgain);

        playAgain.addEventListener("click", () => {
            location.reload();
        });
    }
    else if (computerScore === 5) {
        endResults.textContent = "Computer Wins!";

        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        document.getElementById("3").disabled = true;

        const playAgain = document.createElement("button");
        playAgain.textContent = "Play Again!";
        resultsDiv.appendChild(playAgain);

        playAgain.addEventListener("click", () => {
            location.reload();
        });
    }
    else if (computerScore === 5 && playerScore === 5) {
        endResults.textContent = "Its a draw.";

        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        document.getElementById("3").disabled = true;

        const playAgain = document.createElement("button");
        playAgain.textContent = "Play Again!";
        resultsDiv.appendChild(playAgain);

        playAgain.addEventListener("click", () => {
            location.reload();
        });
    }
}
// Creates DOM for results.
const container = document.querySelector("#container");

const resultsDiv = document.createElement("div");
resultsDiv.style.gap = "10px";
container.appendChild(resultsDiv);

// Creates Players tracking DOM.
const playerWin = document.createElement("p");
playerWin.style.color = "green";
playerWin.textContent = "Player Score: " + playerScore;
resultsDiv.appendChild(playerWin);

// Creates Computer tracking DOM.
const computerWin = document.createElement("p");
computerWin.style.color = "red";
computerWin.textContent = "Computer Score: " + computerScore;
resultsDiv.appendChild(computerWin);

// Creates game tracking DOM.
const gameStatus = document.createElement("p");
gameStatus.style.color = "orange";
resultsDiv.appendChild(gameStatus)

// Creates game end results tracker DOM.
const endResults = document.createElement("p");
endResults.style.color = "black";
resultsDiv.appendChild(endResults);

}
game();