/* Variables */

let computerPick;
let computerPickValue;
let userPickName;
let userPickValue;



/* Main function */

function playRound (playerSelection, computerSelection) {
    userPickName = prompt("Choose your option; rock, paper or scissors:")
    userPickName = userPickName.charAt(0).toUpperCase() + userPickName.slice(1).toLowerCase();
    (userPickName === "Rock") ? userPickValue = "1" : "" ;
    (userPickName === "Paper") ? userPickValue = "2" : "" ;
    (userPickName === "Scissors") ? userPickValue = "3" : "" ;
    
    computerPlay();

    if (userPickValue === 1 && computerPick === 3 || userPickValue === 2 && computerPick === 1 || userPickValue === 3 && computerPick === 2) {
        return `You win! ${userPickName} beats ${computerPickValue}!`;
    } else if (userPickValue === 1 && computerPick === 2 || userPickValue === 2 && computerPick === 3 || userPickValue === 3 && computerPick === 1) {
        return `You Lose! ${userPickName} loses against ${computerPickValue}!`;
    } else {
        return "Draw"; 
    }
}





/* Subfunctions */

function computerPlay () {
    computerPick = Math.floor(Math.random()*3)+1;
    (computerPick === 1 ) ? computerPickValue = "Rock" : " " ;
    (computerPick === 2 ) ? computerPickValue = "Paper" : " " ;
    (computerPick === 3 ) ? computerPickValue = "Scissors" : " " ;
}


/* values
1 - ROCK
2 - PAPER
3 - SCISSORS
*/