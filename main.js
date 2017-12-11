// this will contain the logic of the game
var Word = require("./word.js");
var Letter = require("./letter.js");
var ScoreBoard = require("./scoreBoard.js");
var prompt = require('prompt');
var word = new Word();
console.log(word.word);
var letter = new Letter(word.word);
console.log(letter.wordUnderScores);
var scoreBoard = new ScoreBoard();

 // this will get userInput and display the letter if its correct 
 function checker(){
 	//var userAnswer = prompt("Guess ");
	prompt.get(["Guess"], function(err,result){
		//console.log(result);
		if (scoreBoard.tries === 0 ){
			// return;
			//here goes code that calls playAgain function
		}
		userAnswer = result.Guess.toLowerCase();
		console.log(userAnswer);
		var guessedRight = letter.guessLetter(userAnswer);
		console.log(letter.wordUnderScores);
		if(guessedRight){
			if(letter.isSolved()){
				scoreBoard.addScore();
				console.log("Score: " + scoreBoard.score);
				word = new Word();
				letter = new Letter(word.word);
			} 
		} else {
			scoreBoard.subtractTries();
			console.log("Tries: " + scoreBoard.tries);
				
					// if (result === 'yes'){
					// 	scoreBoard = new ScoreBoard();
					// 	word = new Word();
					// 	letter = new Letter(word.word);
					// }			
		}
		// console.log(guessedRight);
	checker();

	});

}

function playAgain(){
	prompt.get(["Would you like to play again? yes/no"], function(err,result){
		console.log(result);
	});
}
		
checker();
//playAgain();


		// if (userInput.includes(userAnswer)){
		// 	console.log("---------> You entered that letter. Try again <-------- \n");
		// 	ScoreBoard.subtractTries();
		// } else {  
		// 	userInput.push(userAnswer);
		// 	ScoreBoard.subtractTries();
		// }
	//});
// checker();

		















// var ScoreBoard = require("./scoreBoard.js");
// prompt.start();

// play();
// var userInput = []; // this will store the user inputs

// function play(){
// 	guessThisWord = Word.readTxtFile();
// 	ScoreBoard.tries = 7;
// 	console.log("-----New Guess--------");
// 	display();
// }

// function display(){
// 	console.log("Score: " + ScoreBoard.score);
// 	console.log("TRIES: " + ScoreBoard.tries);

// 	console.log("Guess this word: " + guessThisWord);
// 	getUserInput();
// }


// function checker(){
// 	if (!(guessThisWord.includes("_"))){
// 		console.log(ScoreBoard.addScore());
// 		//prompt.stop();
// 		console.log("Score" + ScoreBoard.score);
// 		console.log("TRIES" + ScoreBoard.tries);
// 		// if(ScoreBoard.score < 3){
// 		// 	//play();
// 		// } else {
// 			// prompt.stop();
// 		console.log("you win!");
// 		return;
// 		//}
// 	} else if (ScoreBoard.tries === 0){
// 		console.log("Game over");
// 	}
// }

// function getUserInput(){ // this will get userInput and display the letter if its correct 
// 	prompt.get(["Guess"], function(err,result){
// 		var userAnswer = result.Guess.toLowerCase();
// 		if (userInput.includes(userAnswer)){
// 			console.log("---------> You entered that letter. Try again <-------- \n");
// 			ScoreBoard.subtractTries();
// 		} else {  
// 			userInput.push(userAnswer);
// 			ScoreBoard.subtractTries();
// 		}
// 		for (var i = 0; i < guessWord.length; i++){
// 			if(guessWord[i] === userAnswer){
// 				guessThisWord[i] = userAnswer;	
// 			}
// 		}
// 		display();
// 		checker();
// 	})

		
// }

// // prompt.stop = function () {
// //     if (prompt.stopped || !prompt.started) {
// //         return;
// //     }
 
// //     stdin.destroy();
// //     prompt.emit('stop');
// //     prompt.stopped = true;
// //     prompt.started = false;
// //     prompt.paused = false;
// //     return prompt;
// // }


// //should have a checker function 


// //game logic 
// //1. user is displayed with a blank spaced word 
// //2. user tries to guess the word
// // checks if letter is correct 
// // 