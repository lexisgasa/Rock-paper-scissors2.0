let computerPick;
let computerPickValue;

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