var fs = require('fs'),
    path = require('path'),
    dir = process.argv[2], // Directory name as the first argument to your program (e.g. '/path/to/dir/')
    ext = '.' + process.argv[3]; // file extension to filter by as second argument.

// The fs.readdir() method takes a pathname as its first argument and a callback as its second. The argument files
// is an array of filename strings.
fs.readdir(dir, function(err, files) {
    files.forEach(function(list) {
        if (path.extname(list) === ext) {

            console.log(list);
        }
    });
});

