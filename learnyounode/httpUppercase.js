var http = require('http'),
    map = require('through2-map'),
    portNumber = process.argv[2],
    server = http.createServer(function(req, res) {
        // request handling logic...
        if (req.method != 'POST') {

            return req.end('POST');
        }
        req.pipe(map(function(path) {

            return path.toString().toUpperCase();
        })).pipe(res);
    });

server.listen(portNumber);

// Without using 'through2-map':

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


