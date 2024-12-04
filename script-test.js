// function getComputerChoice() {
//     function randomIntFromInterval(min, max) { // min and max included 
//         return Math.floor(Math.random() * (max - min + 1) + min);
//     }

//     return rndInt = randomIntFromInterval(1, 3);
    

//     // if (rndInt === 1) {
//     //     return "rock";
//     // }
//     // else if (rndInt === 2) {
//     //     return "paper";
//     // }
//     // else if (rndInt === 3) {
//     //     return "scissors";
//     // }
//     // else {
//     //     return "error";
//     // }
// }
// console.log(getComputerChoice());
function getComputerChoice(x, y) {
    return Math.floor(Math.random() * (y-x+1)+x)
}
function getHumanChoice() {
    let choice2 = prompt("Please 1 for Rock, 2 for Paper, 3 for Scissors.", "");
    return console.log(choice2);
    // if (choice === 1) {
    //     return "rock";
    // }
    // else if (choice === 2) {
    //     return "paper";
    // }
    // else if (choice === 3 ) {
    //     return "scissors";
    // }
    // else {
    //     return "error";
    // }
}
// console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice(1, 3);

    if (humanChoice == computerChoice){
        console.log("Its a tie.")
    }
    else if ( humanChoice == 1){
        if (computerChoice == 2){
            console.log("You Loose.")
        }
        else {
            console.log("You won.")
        }
    }
    else if ( humanChoice == 2 ) {
        if (computerChoice == 1){
            console.log("You Won.")
        }
        else {
            console.log("You Loose.")
        }
    }

    else if (humanChoice == 3) {
        if (computerChoice == 2){
            console.log("You Won.")
        }
        else {
            console.log("You Loose.")
        }
    }

}

playRound();