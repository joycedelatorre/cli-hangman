// this will contain the logic of the game
var prompt = require('prompt');
prompt.start();

// console.log(word.guessWord);
	var word = require("./word.js");
	console.log(word.readTxtFile());

prompt.get([], function(err,result){
	//console.log(result);
	// var userGuess = prompt.result;
	// console.log(userGuess);
})



//should have a checker function 