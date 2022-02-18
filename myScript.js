// Subfunctions 
let computerPickValue;
let computerPickName;
function computerPlay () {
    computerPickValue = Math.floor(Math.random()*3);
    (computerPickValue === 0 ) ? computerPickName = "Rock" : "" ;
    (computerPickValue === 1 ) ? computerPickName = "Paper" : "" ;
    (computerPickValue === 2 ) ? computerPickName = "Scissors" : "" ;
}

let userPickName;
let userPickValue;
function userPlay() {
    userPickName = prompt("Choose your option; rock, paper or scissors:");
    userPickName = userPickName.charAt(0).toUpperCase() + userPickName.slice(1).toLowerCase();
    (userPickName === "Rock") ? userPickValue = 0 : "" ;
    (userPickName === "Paper") ? userPickValue = 1 : "" ;
    (userPickName === "Scissors") ? userPickValue = 2 : "" ;
}


let totalWin = 0;
let totalLose = 0;
let totalDraw = 0;
function playRound () {
    userPlay();
    computerPlay();
    
    if (userPickValue === 1 && computerPickValue === 3 || userPickValue === 2 && computerPickValue === 1 || userPickValue === 3 && computerPickValue === 2) {
        ++totalWin;
        console.log(`You win! ${userPickName} beats ${computerPickName}!`);
    } else if (userPickValue === 1 && computerPickValue === 2 || userPickValue === 2 && computerPickValue === 3 || userPickValue === 3 && computerPickValue === 1) {
        ++totalLose;
        console.log(`You Lose! ${userPickName} loses against ${computerPickName}!`);
    } else {
        ++totalDraw;
        console.log("Draw"); 
    }
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