//Create a variable for user input and result of the match
let result;
let playerchoice;
//Create a variable for computer input
let computerchoice;
//Ask for user input (store it in the variable)
playerchoice = prompt("Rock, paper scissors?");
playerchoice.toLowerCase();
//Ask for a computer input (store it in the variable)
function getcomputerchoice(){
        var computerchoice = []
        computerchoice[0] = "Rock"
        computerchoice[1] = "Paper"
        computerchoice[2] = "scissors"
        // Generate a random number between 0 and the words array length
        var index = Math.floor(Math.random() * computerchoice.length)
        // Return the picked index word
        return computerchoice[index]; 
}
computerchoice.toLowerCase();
/*Compare their results so that:
	If both of them are equal, it is a tie, print: It is a tie! in console
	If you typed rock and the computer choosed paper, print You won!
	If you typed paper and computer choosed scissors, print You won!
	If you typed scissors and computer choosed paper , print you won
else print Computer Wins! */
function  test(playerchoice){
if (playerchoice == "rock") {
    alert("you won");
}
}
