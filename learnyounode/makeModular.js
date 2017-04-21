var dir = process.argv[2], //The first argument is the directory name.
    ext = process.argv[3], // The second argument is the extension filter.
    myModule = require('./modules');

function callback(err, list) {
    if (err) {

        return console.log('Error:', err);
    }
    list.forEach(function(item) {

        console.log(item);
    });
};

myModule(dir, ext, callback);

