var http = require('http'),
    url = require('url'),
    port = process.argv[2],
    parseTime = function(time) {
    // The JSON response should contain only 'hour', 'minute' and 'second' properties.
        return {
            hour: time.getHours(),
            minute: time.getMinutes(),
            second: time.getSeconds()
        }
    };

function unixTime(time) {

  return {unixtime: time.getTime()}
};

var parseQuery = function(url) {
    switch (url.pathname) {
        case '/api/parsetime':
            return parseTime(new Date(url.query.iso));
    // Add second endpoint for the path '/api/unixtime' which accepts the same query string but returns UNIX epoch time in milliseconds
    // (the number of milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'.
        case '/api/unixtime':
            return unixTime(new Date(url.query.iso));//Expect the request to contain a query string with a key 'iso' and an ISO-format
                                                    // time as the value.
        default:
            return 'please enter a valid endpoint url';
    }
};

// Write an HTTP server that serves JSON data when it receives a GET request
http.createServer(function(request, response) {
    if (request.method === 'GET') {
        response.writeHead(200, {'Content-Type': 'application/json'});
        url = url.parse(request.url, true);
        // Your response should be in a JSON string format.
        response.end(JSON.stringify(parseQuery(url)));
    } else {
        response.writeHead(405);
        response.end();
    }
// Your server should listen on the port provided by the first argument to your program.
}).listen(+ port, function() {

  console.log('Server listening on http://localhost:%s', port);
});

