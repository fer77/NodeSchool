var fs = require('fs');

var  args = process.argv[2];

// Tried running this using: fs.readFile(file, 'utf8', callback).  But could not get it to pass.

fs.readFile(args, function(err, data) {

    var lines = data.toString().split('\n').length - 1;

    console.log(lines);
});


