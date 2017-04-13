var http = require('http');
    url = process.argv[2];

http.get(url, function(req) {

    req.setEncoding('utf8');

    req.on("error", console.error);

    req.on("data", console.log);
   });

//Stream. http://nodeschool.io/#stream-adventure shows how they work.
//Like many of the functions in this exercices http.get() takes a callback function and passes data to that callback when it is available.
//The difference between the response data object and the data in the earlier assignments is that its a stream rather than just a plain JS object of data.
//One way to use a stream is its .on method where you can listen for 'data' or 'error' events and handle them.
//If you change to using console.error in the error case it should pass that way too.
//Rule of thumb is that if you dont get possible errors as the first argument to the callback function (err, data) you are dealing with streams.
//Then errors will show up at response.on('error') instead and data at response.on('data').
