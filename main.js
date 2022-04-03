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
