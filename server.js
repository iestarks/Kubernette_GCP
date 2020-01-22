//example of nodejs application

var http = require('http');
var handleRequest =  function(request, response){
console.log('Recieved request for URL:' + request.url);
response.writeHead(200);

response.end('Irv Webpage created using GoogleCloud, Kubernettes (6 replicas), 3 nodes,web server created using nodejs');
};
var www= http.createServer(handleRequest);
www.listen(8080);

