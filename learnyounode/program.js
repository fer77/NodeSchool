var fs = require('fs');
    path = require('path');
    myModule = require('./modules');

var dir = process.argv[2];
    ext = '.' + process.argv[3];

function callback(err, list) {
    //if (err) throw err;
    list.forEach(function (file) {
        console.log(file);
    });
};

myModule(dir, ext, callback);
