var fs = require('fs'),
    pathToFile = process.argv[2]; // The full path to the file to read will be provided as the first command-line argument.

// Write a program that uses a single asynchronous filesystem operation to read a file and print the number of newlines it contains to
// the console
fs.readFile(pathToFile, function(err, data) {

    var newLines = data.toString().split('\n').length - 1; // collect the value from the callback function that is passed in as the 
                                                          //second argument.

    console.log(newLines);
});


