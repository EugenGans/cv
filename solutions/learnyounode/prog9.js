var http = require('http'); 
var bl = require('bl') 

var count = 0
var TOTAL = 3;
var results = [];

var getHttp = function(ind) {
	http.get(process.argv[ind+2], function(response) {
		// response.setEncoding('utf8')
		response.pipe(bl(function (err, data) {      
			if (err) {                                 
				return console.error(err)                
			}                                                            
			results[ind] = data.toString();
			count ++;
			if (count === TOTAL) {
				for (var i = 0; i < 3; i++) {
					console.log(results[i])
				}
			}; 
		}))
	});
};

for (var i = 0; i < 3; i++) {
	getHttp(i);
}