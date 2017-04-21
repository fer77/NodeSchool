var http = require('http');
    url = process.argv[2];
    bl = require('bl');

// Solution using Buffer list collector or an npm package to collect the data:

http.get(url, function(req) {
    req.pipe(bl(function(err, data) {
        if(err) {

            console.log("There was an error: " + err);
        }
        data = data.toString();
        console.log(data.length);
        console.log(data);
    }));
});

// Solution without the use of a npm package to collect the data:
var http = require('http');
    url = process.argv[2];
    data = '';

http.get(url, function (res) {
  res.on('data', function (chunk) {
    data += chunk;
  });
  res.on('end', function () {
    console.log(data.length);
    console.log(data);
  });
});

