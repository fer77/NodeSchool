var fs = require('fs');
    path = require('path');


module.exports = function (dir, ext, callback) {
    fs.readdir(dir, function(err, files) {
        files.forEach(function(list) {
            if (path.extname(list) === ext) {
                console.log(list);
            }
        });
        return callback(null, list);
    });
};

