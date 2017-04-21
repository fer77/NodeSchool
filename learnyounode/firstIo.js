var fs = require('fs'),
    pathToFile = process.argv[2];

// Write a program that uses a single synchronous filesystem operation to read a file and print the number of newlines (\n)
// it contains to the console.
file = fs.readFileSync(pathToFile); // This method returns a Buffer object containing the complete contents of the file.

lines = file.toString();

console.log(lines.split('\n').length - 1);
