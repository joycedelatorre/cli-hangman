// this will contain the logic of the game
var prompt = require('prompt');
var Word = require("./word.js");
var ScoreBoard = require("./scoreBoard.js");
prompt.start();

play();
var userInput = []; // this will store the user inputs

function play(){
	guessThisWord = Word.readTxtFile();
	ScoreBoard.tries = 7;
	console.log("-----New Guess--------");
	display();
}

function display(){
	console.log("Score: " + ScoreBoard.score);
	console.log("TRIES: " + ScoreBoard.tries);

	console.log("Guess this word: " + guessThisWord);
	getUserInput();
}


function checker(){
	if (!(guessThisWord.includes("_"))){
		console.log(ScoreBoard.addScore());
		//prompt.stop();
		console.log("Score" + ScoreBoard.score);
		console.log("TRIES" + ScoreBoard.tries);
		// if(ScoreBoard.score < 3){
		// 	//play();
		// } else {
			// prompt.stop();
		console.log("you win!");
		return;
		//}
	} else if (ScoreBoard.tries === 0){
		console.log("Game over");
	}
}

function getUserInput(){ // this will get userInput and display the letter if its correct 
	prompt.get(["Guess"], function(err,result){
		var userAnswer = result.Guess.toLowerCase();
		if (userInput.includes(userAnswer)){
			console.log("---------> You entered that letter. Try again <-------- \n");
			ScoreBoard.subtractTries();
		} else {  
			userInput.push(userAnswer);
			ScoreBoard.subtractTries();
		}
		for (var i = 0; i < guessWord.length; i++){
			if(guessWord[i] === userAnswer){
				guessThisWord[i] = userAnswer;	
			}
		}
		display();
		checker();
	})

		
}

// prompt.stop = function () {
//     if (prompt.stopped || !prompt.started) {
//         return;
//     }
 
//     stdin.destroy();
//     prompt.emit('stop');
//     prompt.stopped = true;
//     prompt.started = false;
//     prompt.paused = false;
//     return prompt;
// }


//should have a checker function 


//game logic 
//1. user is displayed with a blank spaced word 
//2. user tries to guess the word
// checks if letter is correct 
// 