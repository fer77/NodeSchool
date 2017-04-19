var http = require('http'),
    fs = require('fs'),
    portNumber = process.argv[2],
    path = process.argv[3];


var server = http.createServer(function (req, res) {
       // request handling logic...
    var file = fs.createReadStream(path);
    file.pipe(res);
});

server.listen(portNumber);



