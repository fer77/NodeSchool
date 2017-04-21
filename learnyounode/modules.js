var fs = require('fs'),
    path = require('path');

// The module must export a single function that takes three arguments:
// the directory name, the filename extension string and a callback function, in that order.
module.exports = function(dir, ext, callback) {
    fs.readdir(dir, function(err, files) {
        if (err) {
            
            return callback(err); // Handle all the errors that may occur and pass them to the callback.
        }
        files = files.filter(function (file) {
            
            return path.extname(file) === '.' + ext
        });
        
        callback(null, files); // Call the callback exactly once with an error or some data as described.
    });
};


