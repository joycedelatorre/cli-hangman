var prompt = require('prompt');
prompt.start();

prompt.get(['guess'], function(err,result){
	console.log(result.guess);
})