var fs = require("file-system");

var Word = function() {
	
	
		var data = fs.readFileSync("wordsToGuess.txt", "utf-8");
		//console.log("READ DATA " + data);
		data = data.trim();
		var dataArr = data.split(",");
		//console.log(dataArr);
		var randomPosition = Math.floor((Math.random()*dataArr.length));
		// console.log(randomPosition);
		guessWord = dataArr[randomPosition];
		//console.log(guessWord);
		this.word = guessWord;
}

module.exports = Word;
