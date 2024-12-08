let playerScore = 0;
let computerScore = 0;
let gameOver = false;

const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const scoreText = document.querySelector("#scoreText");

const buttons = document.querySelectorAll("button");
const buttonContainer = document.querySelector("#buttoncontainer");

function updateScore() {
    scoreText.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
}

function checkGameOver() {
    if (playerScore === 5 || computerScore === 5) {
        gameOver = true;
        disableButtons();
        showPlayAgainButton();
        
        if (playerScore === 5) {
            resultText.textContent = "Congratulations! You won the game!";
        } else {
            resultText.textContent = "Computer won the game. Better luck next time!";
        }
    }
}

function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true;
        button.style.opacity = '0.5';
        button.style.cursor = 'not-allowed';
    });
}

function enableButtons() {
    buttons.forEach(button => {
        button.disabled = false;
        button.style.opacity = '1';
        button.style.cursor = 'pointer';
    });
}

function showPlayAgainButton() {
    const playAgainBtn = document.createElement('button');
    playAgainBtn.textContent = 'Play Again';
    playAgainBtn.classList.add('button-2');
    playAgainBtn.addEventListener('click', resetGame);
    buttonContainer.appendChild(playAgainBtn);
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    gameOver = false;
    
    playerText.textContent = 'Player:';
    computerText.textContent = 'Computer:';
    resultText.textContent = 'Choose your move!';
    updateScore();
    
    enableButtons();
    
    // Remove play again button
    const playAgainBtn = buttonContainer.querySelector('button:last-child');
    if (playAgainBtn && playAgainBtn.textContent === 'Play Again') {
        buttonContainer.removeChild(playAgainBtn);
    }
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (gameOver) return;
        
        let playerChoice = button.textContent;
        playerText.textContent = `Player: ${playerChoice}`;
        
        getComputerChoice();
        computerText.textContent = `Computer: ${computer}`;
        
        let result = checkWinner(playerChoice, computer);
        resultText.textContent = `Result: ${result}`;
        
        updateScore();
        checkGameOver();
    });
});

function getComputerChoice() {
    const randNum = Math.floor(Math.random() * 3) + 1;
    switch (randNum) {
        case 1:
            computer = "Rock";
            break;
        case 2:
            computer = "Paper";
            break;
        case 3:
            computer = "Scissors";
            break;
    }
}

function checkWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "Draw!";
    }
    else if (computerChoice === "Rock") {
        if (playerChoice === "Paper") {
            playerScore++;
            return "You Win!";
        } else {
            computerScore++;
            return "You Lose!";
        }
    }
    else if (computerChoice === "Paper") {
        if (playerChoice === "Scissors") {
            playerScore++;
            return "You Win!";
        } else {
            computerScore++;
            return "You Lose!";
        }
    }
    else if (computerChoice === "Scissors") {
        if (playerChoice === "Rock") {
            playerScore++;
            return "You Win!";
        } else {
            computerScore++;
            return "You Lose!";
        }
    }
}

// Initial score update
updateScore();