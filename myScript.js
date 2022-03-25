// Computer function
let computerPickValue, computerPickName;
function computerPlay () {
    computerPickValue = Math.floor(Math.random()*3);
    if (computerPickValue === 0) {
        computerPickName = "Rock";
    } else if  (computerPickValue === 1) {
        computerPickName = "Paper";
    } else (computerPickName = "Scissors")
}

// User function
let userPickValue, userPickName;
let rock = document.querySelector(".rockButton");
rock.addEventListener("click", () => {
    userPickValue = 0;
    userPickName = "Rock";
    playRound();
    });

let paper = document.querySelector(".paperButton");
paper.addEventListener("click", () => {
    userPickValue = 1;
    userPickName = "Paper";
    playRound();
    });

let scissors = document.querySelector(".scissorsButton");
scissors.addEventListener("click", () => {
    userPickValue = 2;
    userPickName = "Scissors";
    playRound();
    });

let totalWin = 0, totalLose = 0, totalDraw = 0;

// Results statement
function playRound (playerSelection, computerSelection) {
  
        playerSelection = userPickValue;
        computerSelection = computerPlay();
        if (totalWin == 5) {
            announce.textContent = "You have won the game!"
        }
        else if (totalLose == 5) {
            announce.textContent = "You have lost the game!"
        }
        else if (userPickValue === 0 && computerPickValue === 2 || userPickValue === 1 && computerPickValue === 0 || 
            userPickValue === 2 && computerPickValue === 1) {
            totalWin++;
            announce.textContent = `You won, ${userPickName} beats ${computerPickName}!`;
            userResult.textContent = totalWin;
            computerResult.textContent = totalLose;
        } else if (userPickValue === 0 && computerPickValue === 1 || userPickValue === 1 && computerPickValue === 2 ||
            userPickValue === 2 && computerPickValue === 0) {
            totalLose++;
            announce.textContent = `You lose, ${userPickName} beats ${computerPickName}!`;
            userResult.textContent = totalWin;
            computerResult.textContent = totalLose;
        } else if (userPickValue === 0 && computerPickValue === 0 || userPickValue === 1 && computerPickValue === 1 ||
            userPickValue === 2 && computerPickValue === 2) {
            totalDraw++;
            announce.textContent = "Tie!"
        } else { return } 
        
        console.log(`Result is: ${totalWin} wins, ${totalLose} losess, ${totalDraw} ties.`)
}

let userResult = document.querySelector(".userResultScore")
let computerResult = document.querySelector(".computerResultScore")
let announce = document.querySelector(".announcement")


/* values
0 - ROCK
1 - PAPER
2 - SCISSORS
*/
