let computerPickValue, computerPickName;
function computerPlay () {
    computerPickValue = Math.floor(Math.random()*3);
    if (computerPickValue === 0) {
        computerPickName = "Rock";
    } else if  (computerPickValue === 1) {
        computerPickName = "Paper";
    } else if (computerPickValue === 2) {
        computerPickName = "Scissors";
    } else {return "Incorrect input"}
}

let userPickName, userPickValue;
function userPlay() {
    userPickName = prompt("Choose your option; rock, paper or scissors:");
    userPickName = userPickName.charAt(0).toUpperCase() + userPickName.slice(1).toLowerCase();
    if (userPickName === "Rock") {
        userPickValue = 0;
    } else if  (userPickName === "Paper") {
        userPickValue = 1;
    } else if (userPickName === "Scissors") {
        userPickValue = 2;
    } else {return "Incorrect input"}
}

let totalWin = 0, totalLose = 0, totalDraw = 0;
function playRound (playerSelection, computerSelection) {
    
        playerSelection = userPlay();
        computerSelection = computerPlay();
        if (userPickValue === 0 && computerPickValue === 2 || userPickValue === 1 && computerPickValue === 0 || 
            userPickValue === 2 && computerPickValue === 1) {
            totalWin++;
            console.log(`You win! ${userPickName} beats ${computerPickName}!`);
        } else if (userPickValue === 0 && computerPickValue === 1 || userPickValue === 1 && computerPickValue === 2 ||
            userPickValue === 2 && computerPickValue === 0) {
            totalLose++;
            console.log(`You Lose! ${userPickName} loses against ${computerPickName}!`);
        } else if (userPickValue === 0 && computerPickValue === 0 || userPickValue === 1 && computerPickValue === 1 ||
            userPickValue === 2 && computerPickValue === 2) {
            totalDraw++;
            console.log("Draw"); 
        }   else { return } 

}

// Main function


function game () {

    for (let i = 0; i < 5; i++){
        playRound();
    }
    (totalWin > totalLose && totalDraw) ? console.log(`You win the game! You won ${totalWin}, lost ${totalLose}, and draw ${totalDraw} games!`) : console.log(`You lost the game! You won ${totalWin}, lost ${totalLose}, and draw ${totalDraw} games!`);
}
/* values
0 - ROCK
1 - PAPER
2 - SCISSORS
*/




/* User play no escribir nada = incorrect
play round = undefined
game, valida algo y asocia valor al azar 
*/

// como hacerlo para que haya reset en las total win, lose, draw  (no 5 win 8 lose 3 draws)

// console.log en el userplay, en el game me dice los resultados, si return, en el game no dice nada - la diferencia?

// ternary operator de selecciones, como hacer else? o null si esc
