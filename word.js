var fs = require("file-system");

var readTxtFile = function(){
	fs.readFile("wordsToGuess.txt", "utf-8", function(error,data){
		if (error){
			return console.log(error);
		}
		console.log("READ DATA " + data);
		var dataArr = data.split(",");
		console.log(dataArr);
		var randomPosition = Math.floor((Math.random()*dataArr.length)+1);
		console.log(randomPosition);

		// for(var i =0; i< dataArr.length; i++){
		// 	console.log(dataArr[i]);
		// }
	});
}

//module.exports = {readTxtFile};
readTxtFile();