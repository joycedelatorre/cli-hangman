// this will contain the logic of the game
var prompt = require('prompt');
var Word = require("./word.js");
var ScoreBoard = require("./scoreBoard.js");
prompt.start();
play();
var userInput = []; // this will store the user inputs

function play(){
	guessThisWord = Word.readTxtFile();
	display();
}

function display(){
		console.log("\nScore: " + ScoreBoard.score);
		console.log("\nTRIES: " + ScoreBoard.tries);
		
		console.log("Guess this word: " + guessThisWord);
		getUserInput();
		userInput =[];
		
}


function checker(){
	if (!(guessThisWord.includes("_"))){
		console.log(ScoreBoard.addScore());
		console.log("Score" + ScoreBoard.score);
		console.log("TRIES" + ScoreBoard.tries);
		play();
	} else if (ScoreBoard.tries === 0){
		console.log("Game over");
	}
}

function getUserInput(){ // this will get userInput and display the letter if its correct 
	prompt.get(["Guess"], function(err,result){
		var userAnswer = result.Guess.toLowerCase();
		if (userInput.includes(userAnswer)){
			console.log("---------> You entered that letter. Try again <-------- \n");
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


//should have a checker function 


//game logic 
//1. user is displayed with a blank spaced word 
//2. user tries to guess the word
// checks if letter is correct 
// 