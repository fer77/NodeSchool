var dir = process.argv[2];
    ext = process.argv[3];

var myModule = require('./modules');

function callback(err, list) {
    if (err) {
        
        return console.log('Error:', err);
    }
    list.forEach(function(item) {
        
        console.log(item);
    });
};

myModule(dir, ext, callback);
