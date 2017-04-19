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



