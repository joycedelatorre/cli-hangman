//should have 7 trys 
//will win if 3 words are answered

var ScoreBoard = function() {
	this.score= 0,
	this.tries= 7,
	this.addScore= function(){
		return this.score =+1;
	},
	this.subtractTries= function(){
		this.tries = this.tries - 1;
	}
}
module.exports= ScoreBoard;