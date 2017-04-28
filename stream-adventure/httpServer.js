var http = require('http'),
    through = require('through2'),
    portNumber = process.argv[2],
    server = http.createServer(function(req, res) {
        // request handling logic...
        if (req.method != 'POST') {

            return req.end('POST');
        }
        req.pipe(through(function (buffer, encoding, next) {
        	this.push(buffer.toString().toUpperCase());
        	next();
        })).pipe(res);
    });

server.listen(portNumber);