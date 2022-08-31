//Create a variable for user input and result of the match
let playerchoice;
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
        return alert("It is a tie!");
    }
    else if (playerchoice === "rock" && computerchoice === "scissors"){
        return alert("Player won!");
    }
    else if (playerchoice === "paper" && computerchoice === "rock"){
        return alert("Player won!");
    }
    else if (playerchoice === "scissors" && computerchoice === "paper"){
        return alert("Player won!");
    }
    else{
        return alert("sOMEONE ELSE WON");
    }
}
//Create a variable for computer input
const computerchoice = getcomputerchoice();

getcomputerchoice();
matchRps(playerchoice,computerchoice);