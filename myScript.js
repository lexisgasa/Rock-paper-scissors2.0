/* Variables */

let computerPickValue;
let computerPickName;
let userPickName;
let userPickValue;
let playerSelection = userPlay();
let computerSelection = computerPlay();



/* Main function 

function playRound (playerSelection, computerSelection) {

    if (userPickValue === 1 && computerPickValue === 3 || userPickValue === 2 && computerPickValue === 1 || userPickValue === 3 && computerPickValue === 2) {
        return `You win! ${userPickName} beats ${computerPickName}!`;
    } else if (userPickValue === 1 && computerPickValue === 2 || userPickValue === 2 && computerPickValue === 3 || userPickValue === 3 && computerPickValue === 1) {
        return `You Lose! ${userPickName} loses against ${computerPickName}!`;
    } else {
        return "Draw"; 
    }
}
*/





/* Subfunctions */

function computerPlay () {
    computerPickValue = Math.floor(Math.random()*3)+1;
    (computerPickValue === 1 ) ? computerPickName= "Rock" : " " ;
    (computerPickValue === 2 ) ? computerPickName = "Paper" : " " ;
    (computerPickValue === 3 ) ? computerPickName = "Scissors" : " " ;
}

function userPlay() {
userPickName = prompt("Choose your option; rock, paper or scissors:");
userPickName = userPickName.charAt(0).toUpperCase() + userPickName.slice(1).toLowerCase();
(userPickName === "Rock") ? userPickValue = "1" : "" ;
(userPickName === "Paper") ? userPickValue = "2" : "" ;
(userPickName === "Scissors") ? userPickValue = "3" : "" ;
console.log(userPickName);
console.log(userPickValue);
}

/* values
1 - ROCK
2 - PAPER
3 - SCISSORS
*/