var querystring = require("querystring");
var fs = require("fs")
var path = require("path");
var filePath = path.join("/Documents/Node Projects/Server Tutorial/start.html", 'start.html');

function start(response){
  console.log("Request handler 'start' was called.");

  fs.readFile('../assets/public/start.html', function(err, data){
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(data);
    response.end();
  });

}

function upload(response, postData){
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("You sent: " + querystring.parse(postData).text);
  response.end();
}

exports.start = start;
exports.upload = upload;
