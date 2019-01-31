//  HTTP UPPERCASERER (Задача 12 из 13)

var http = require('http')
var map = require('through2-map')


var server = http.createServer(function listener(request, response) {
	// response.writeHead(200, { 'content-type': 'text/plain' })
	if (request.method !== 'POST') {
		return ('only POST allowed')
	};

	request.pipe(map(function (chunk) {
		return chunk.toString().toUpperCase();
	})).pipe(response)
});
server.listen(Number(process.argv[2]))
