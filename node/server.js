var http = require("http");
var url = require("url");
var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'css')));

function start(route, handle){
  function onRequest(request, response){
    var postData = "";
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    route(handle, pathname, response);

  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started");
}

exports.start = start;
