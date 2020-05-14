var http = require('http')
var server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World Node + NGINX ON DOCKER!!!\n");   
});
server.listen(3000);
console.log("Server Runnint at port 3000 Now!");