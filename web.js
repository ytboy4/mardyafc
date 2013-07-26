var express = require('express');
var fs = require('fs');

var app = express();



var buffer = new Buffer(fs.readFileSync("index.html"));
var out = buffer.toString();

app.use(express.static(__dirname + '/'));
//app.use(express.static(__dirname + '/images'));
app.get('/', function(request, response) {
	response.send(out);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
	console.log("Listening on " + port);
});