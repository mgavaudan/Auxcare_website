/*eslint-env node*/

var express = require('express');

var app = express();

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/dist'));

// start server on the specified port and binding host
app.listen(3008, '0.0.0.0', function() {
	console.log("server starting on 3008");
});


