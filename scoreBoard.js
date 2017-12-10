//should have 7 trys 
//will win if 3 words are answered

var ScoreBoard = {
	score: 0,
	tries: 7,
	addScore: function(){
		return this.score =+1;
	},
	subtractTries: function(){
		this.tries = this.tries - 1;
	}
}
module.exports= ScoreBoard;