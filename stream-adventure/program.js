var through = require('through2');
var split = require('split');
    process.stdin
        .pipe(split())
        .pipe(through2(function (buffer, encoding, next) {
            console.dir(line.toString());
            next();
        }));
