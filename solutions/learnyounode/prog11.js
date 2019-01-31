//  FILE SERVER (Exercise 11 of 13)

var http = require('http')
var fs = require('fs')


var server = http.createServer(function listener(request, response) {
	// response.writeHead(200, { 'content-type': 'text/plain' })

	fs.createReadStream(process.argv[3]).pipe(response);
});
server.listen(Number(process.argv[2]))
