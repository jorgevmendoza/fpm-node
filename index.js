var express = require('express');
var https = require('https');
var app = express();

var options = {
	//52.73.212.80
	host: 'localhost',
   	port: 3000,
   	path: '/info.php'
}

app.get('/', function(request, response){

	console.log('Getting GET Requests');

	https.get(options, function(res){
		console.log('Response status', res.status);
		//response.send(res.status);
	});

	response.send({message:'Ok!'});
});

app.listen('3000', function(){
	console.log('App is running');
});