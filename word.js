var fs = require("file-system");

var word ={
	guessWord:null,

	readTxtFile: function(){
		var data = fs.readFileSync("wordsToGuess.txt", "utf-8");
		//console.log("READ DATA " + data);
		data = data.trim();
		var dataArr = data.split(",");
		//console.log(dataArr);
		var randomPosition = Math.floor((Math.random()*dataArr.length)+1);
		//console.log(randomPosition);
		this.guessWord = dataArr[randomPosition];
		//console.log(guessWord);
		var blankArray =[]
		for(var i=0; i< this.guessWord.length; i++){
			if(this.guessWord[i] === " "){
				blankArray.push(" ");
			} 
				blankArray.push("_");
		}
		return "Guess this word: " + blankArray.join();
	}
}

module.exports = word;
