function getComputerChoice(x, y) {
    return Math.floor(Math.random() * (y - x + 1) + x)
}

function getHumanChoice() {
    let choice2 = prompt("Please 1 for Rock, 2 for Paper, 3 for Scissors.", "");
    return choice2= Number.parseInt(choice2);
}
let humanScore = 0;
let computerScore = 0;
let numberOfRounds = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice(1, 3);

    if (humanChoice == computerChoice) {
        console.log("Its a tie.")
    }
    else if (humanChoice == 1) {
        if (computerChoice == 2) {
            computerScore++;
            console.log("You Loose.")
        }
        else {
            humanScore++;
            console.log("You Won.")
        }
    }
    else if (humanChoice == 2) {
        if (computerChoice == 1) {
            humanScore++;
            console.log("You Won.")
        }
        else {
            computerScore++;
            console.log("You Loose.")
        }
    }

    else if (humanChoice == 3) {
        if (computerChoice == 2) {
            humanScore++;
            console.log("You Won.")
        }
        else {
            computerScore++;
            console.log("You Loose.")
        }
    }
}

for (humanScore = 0, computerScore = 0; humanScore<5,  computerScore<5;){
    playRound();
    numberOfRounds++;
    console.log("your score", humanScore, "comp score", computerScore, "number of rounds", numberOfRounds);   
}



  
 
 
  

