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