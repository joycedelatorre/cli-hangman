// this will contain the logic of the game
var prompt = require('prompt');
prompt.start();

function play(){
	var word = require("./word.js");
	guessThisWord = word.readTxtFile();
	display();
}

function display(){
	if !(guessThisWord.includes("_")){
		var scoreBoard = require("./scoreBoard.js");
		scoreBoard.addScore();
	}
	console.log("Guess this word: " + guessThisWord);
	getUserInput();
	console.log(guessWord);
}


var userInput = []; // this will store the user inputs

function getUserInput(){ // this will get userInput and display the letter if its correct 
	prompt.get(["Guess"], function(err,result){
		var userAnswer = result.Guess.toLowerCase();
		if (userInput.includes(userAnswer)){
			console.log("---------> You entered that letter. Try again <-------- \n");
		} else {  
			userInput.push(userAnswer);
		}

		if (guessWord.includes(userAnswer)){
			// console.log(true);
			var pos = guessWord.indexOf(userAnswer);
			guessThisWord[pos] = userAnswer;
			display();

		} else{
			console.log(guessWord);
		}
	})
}


//should have a checker function 


//game logic 
//1. user is displayed with a blank spaced word 
//2. user tries to guess the word
// checks if letter is correct 
// 