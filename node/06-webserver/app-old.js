const http = require('http');

http.createServer((req, res) => {

    console.log(req);

    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.write('404 | Page not found');
    res.end();
})
.listen (8080);

console.log("por alli viendo que hay en el puerto ", 8080);