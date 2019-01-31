// HTTP COLLECT (Exercise 8 of 13)

var http = require('http'); 
var count = 0;
var result = '';

// http.get(process.argv[2], function(response) {
// 	response.setEncoding('utf8')
// 	response.on('data', function(data) {
// 		result += data;
// 		count += data.length;
// 	})
// 	response.on('end', function() {
// 		console.log(count);
// 		console.log(result);
// 	})
// })

                 
var bl = require('bl')                         
                                               
http.get(process.argv[2], function (response) {
// 	response.setEncoding('utf8')
  response.pipe(bl(function (err, data) {      
    if (err) {                                 
      return console.error(err)                
    }                                          
    data = data.toString()                     
    console.log(data.length)                   
    console.log(data)                          
  }))                                          
})                                             