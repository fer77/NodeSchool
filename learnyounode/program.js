var http = require('http'),
    portNumber = process.argv[2];

var server = http.createServer(function(req, res) {
    var body = '';
    
    req.setEncoding('utf8');
    req.on('data', function(chunk) {
        body+=chunk;
    });
    
    req.on('end', function() {
        res.end(body.toUpperCase());
    });
});

server.listen(portNumber);
