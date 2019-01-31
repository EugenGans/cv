//  TIME SERVER (Exercise 10 of 13)

var net = require('net')
var strftime = require('strftime')


var server = net.createServer(function listener(socket) {
	// socket.write(timeStr)
	socket.end(strftime('%F %H:%M\n', new Date()))
});
server.listen(Number(process.argv[2]))
