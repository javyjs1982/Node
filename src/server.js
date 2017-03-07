const http = require('http');
const server = http.createServer((request, response)=>{
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end("Hellow World!");
});
server.listen(5000);