let playerCounter = 0;
let computerCounter = 0;
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const result = document.querySelector('.result');
const score = document.querySelector('.score')

score.textContent = `${playerCounter} x ${computerCounter}`

rock.addEventListener('click', () => {
    playRound('rock');
    scoreboard();
})
paper.addEventListener('click', () => {
    playRound('paper');
    scoreboard();
})
scissors.addEventListener('click', () => {
    playRound('scissors');
    scoreboard();
})

function scoreboard () {
    score.textContent = `${playerCounter} x ${computerCounter}`;
    switch (playerCounter) {
        case 5:
        result.textContent = `You won!`
        reset();
        break;
    }
    
    switch (computerCounter) {
        case 5:
        result.textContent = `You lost!`
        reset();
        break;
    }

}

function reset () {
    playerCounter = 0;
    computerCounter = 0;
}

function getComputerChoice () {
    const choices = ["Rock", "Paper", "Scissors"];
    let item = choices[Math.floor(Math.random() * choices.length)];
    return item;
}

function playRound (playerSelection) {
    let player = playerSelection.toLowerCase();
    let computerSelection = getComputerChoice();
    if (player === "rock") {
        if (computerSelection === "Paper") {
            computerCounter++;
            return result.textContent = "Rock loses to Paper!"
        } else if (computerSelection === "Scissors") {
            playerCounter++
            return result.textContent = "Rock beats Scissors!"
        } else {
            return result.textContent = "Rock vs Rock it's a tie!"
        }
    } else if (player === "paper") {
        if (computerSelection === "Rock") {
            playerCounter++;
            return result.textContent = "Paper beats Rock!"
        } else if (computerSelection === "Scissors") {
            computerCounter++;
             return result.textContent = "Paper loses to Scissors!"
        } else {
            return result.textContent = "Paper vs Paper it's a tie!"
        }
    } else if (player === "scissors") {
        if (computerSelection === "Paper") {
            playerCounter++;
            return result.textContent = "Scissors beats Paper!"
        } else if (computerSelection === "Rock") {
            return result.textContent = "Scissors loses to Rock!"
        } else {
            return result.textContent = "Scissors vs Scissors it's a tie!"
        }
    }
}