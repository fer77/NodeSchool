var http = require('http'),
    url = process.argv[2]; // Write a program that performs an HTTP GET request to a URL provided to you 
                          // as the first command-line argument.

// The http.get() method is a shortcut for simple GET requests. The first argument to http.get() can be the URL 
// you want to GET; provide a callback as the second argument. The req object is a Node Stream object. You can treat Node
// Streams as objects that emit three events: "data", "error" and "end".
http.get(url, function(req) {

    req.setEncoding('utf8'); // The setEncoding() method can be used with "utf8", the "data" events will then emit 
                            // Strings rather than the standard Node Buffer objects, which would have to explicitly be convert to Strings.

    req.on("error", console.error);

    req.on("data", console.log); // The "data" event is emitted when a chunk of data is available and can be processed.
   });

