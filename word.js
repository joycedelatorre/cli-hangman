var fs = require("file-system");

var Word ={
	guessWord:null,
	readTxtFile: function(){
		var data = fs.readFileSync("wordsToGuess.txt", "utf-8");
		//console.log("READ DATA " + data);
		data = data.trim();
		var dataArr = data.split(",");
		//console.log(dataArr);
		var randomPosition = Math.floor((Math.random()*dataArr.length));
		console.log(randomPosition);
		guessWord = dataArr[randomPosition];
		//console.log(guessWord);
		var blankArray =[]
		for(var i=0; i<guessWord.length; i++){
			if(guessWord[i] === " "){
				blankArray.push(" ");
			} 
				blankArray.push("_");
		}
		return blankArray;
	}
}

module.exports = Word;
