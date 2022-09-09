//Create a variable for user input and result of the match, and other global variables
let playerchoice;
var playerScore = 0;
let computerScore = 0;
const scoreBoard = document.querySelector('#scoreboard');
//Ask for user input (store it in the variable)
playerchoice = prompt("Rock, paper scissors?");
function choose(choice){
    var choice;
    playerchoice = choice;
    return playerchoice;
}

playerchoice.toLowerCase();

//Ask for a computer input (store it in the variable)
function getcomputerchoice(){
    const pick = ['rock', 'paper', 'scissors'];
    return pick[Math.floor(Math.random() * pick.length)];
}
/*Compare their results so that:
	If both of them are equal, it is a tie, print: It is a tie! in console
	If you typed rock and the computer choosed paper, print You won!
	If you typed paper and computer choosed scissors, print You won!
	If you typed scissors and computer choosed paper , print you won
else print Computer Wins! */
function matchRps (playerchoice,computerchoice){
    if(playerchoice == computerchoice){
        return console.log("It is a tie!") ;
    }
    else if (playerchoice === "rock" && computerchoice === "scissors"){
        return console.log("Player won!" + playerScore++ + " points!") ;
    }
    else if (playerchoice === "paper" && computerchoice === "rock"){
        return console.log("Player won!" + playerScore++ + " points!") ;
    }
    else if (playerchoice === "scissors" && computerchoice === "paper"){
        return console.log("Player won!" +  playerScore++ + " points!" );
    }
    else{
        return console.log("Computer wins!" + computerScore++);
    }
}

 function checkWinner(){
    if (computerScore === "5"){
        return console.log("Computer WON the game!");
    }
    else if(playerScore===5){
        return console.log("Player WON the game!");
    }
    else{}
 }
//Create a variable for computer input
let computerchoice = getcomputerchoice();

//Function called game
const buttons = document.querySelectorAll('.element-button');
buttons.forEach(button =>{
    button.addEventListener('click',function(){
        matchRps(button.value)
    })
})

function setScores() {
    playerBoard.innerHTML = playerScore;
    aiBoard.innerHTML = computerScore;

