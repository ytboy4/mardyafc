var express = require('express');
var fs = reuqire('fs');

var app = express.createServer(express.logger());

var buffer = new Buffer(fs.readFileSync("index.html"));
var out = buffer.toString();

app.get('/', function(request, response) {
	response.send(out);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
	console.log("Listening on " + port);
});