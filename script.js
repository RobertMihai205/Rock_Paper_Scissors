//Create a variable for user input and result of the match
let playerchoice;
var playerScore = 0;
let computerScore = 0;
//Ask for user input (store it in the variable)
playerchoice = prompt("Rock, paper scissors?");

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
        return alert("It is a tie!"), playerScore++ , computerScore++ ;
    }
    else if (playerchoice === "rock" && computerchoice === "scissors"){
        return alert("Player won!"), playerScore++ ;
    }
    else if (playerchoice === "paper" && computerchoice === "rock"){
        return alert("Player won!"), playerScore++ ;
    }
    else if (playerchoice === "scissors" && computerchoice === "paper"){
        return alert("Player won!"), playerScore++ ;
    }
    else{
        return alert("Computer wins!"), computerScore++;
    }
}
//Create a variable for computer input
const computerchoice = getcomputerchoice();

getcomputerchoice();
matchRps(playerchoice,computerchoice);

//Function called game
function game(){
for (let i = 0; i < 5; i++) {
   if (matchRps();)
 }
}