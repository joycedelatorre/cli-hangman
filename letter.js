var Letter = function(word){
	this.word = word;

	this.wordUnderScores =[];
	for(var i=0; i<this.word.length; i++){
		if(this.word[i] === " "){
			this.wordUnderScores.push(" ");
		} 
			this.wordUnderScores.push("_");
	}

	this.guessLetter = function(letter){
		var found = false;
		for (var i = 0; i < this.word.length; i++){
			if(this.word[i] === letter){
				this.wordUnderScores[i] = letter;
				found = true;	
			}
		}
		return found;

	};

	this.isSolved = function(){
		if (this.wordUnderScores.includes("_")){
			return false;
		} else {
			return true;
		}
	}

}

// var cat = new Letter("cat");
module.exports = Letter;