//Create a variable for user input
let playerchoice
//Create a variable for computer input
let computerchoice
//Ask for user input (store it in the variable)
userchoice = prompt("Rock, paper scissors?")
//Ask for a computer input (store it in the variable)
function getcomputerchoice(){
        var words = []
        words[0] = "Rock"
        words[1] = "paper"
        words[2] = "scissors"
        // Generate a random number between 0 and the words array length
        var index = Math.floor(Math.random() * words.length)
        // Return the picked index word
        return words[index]  
}
/*Compare their results so that:
	If both of them are equal, it is a tie, print: It is a tie! in console
	If you typed rock and the computer choosed paper, print You won!
	If you typed paper and computer choosed scissors, print You won!
	If you typed scissors and computer choosed paper , print you won
else print Computer Wins! */
function roundP(playerchoice,computerchoice){

}