var fs = require('fs');
    path = require('path');

var dir = process.argv[2];
    ext = '.' + process.argv[3];

fs.readdir(dir, function(err, files) {
    files.forEach(function(list) {
        if (path.extname(list) === ext) {
            
            console.log(list);
        }
    });
});

