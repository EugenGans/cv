//  HTTP UPPERCASERER (Задача 12 из 13)

var http = require('http')
var url = require('url')


var server = http.createServer(function listener(request, response) {
	// response.writeHead(200, { 'content-type': 'text/plain' })
	if (request.method !== 'GET') {
		return ('only GET allowed')
	};
	response.writeHead(200, { 'Content-Type': 'application/json' })

	var urlParesd = url.parse(request.url, true);
	var time = new Date(urlParesd.query.iso);
	var pathname = urlParesd.pathname;

	if (pathname === '/api/unixtime') {
		time = {
			'unixtime': time.getTime()
		}
	}

	if (pathname === '/api/parsetime') {
		time = {
			'hour': time.getHours(),
			'minute': time.getMinutes(),
			'second': time.getSeconds()
		}
	}
	response.end(JSON.stringify(time));
});
server.listen(Number(process.argv[2]))
