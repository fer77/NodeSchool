// The argument given to you from process.argv[2] will be a path to a file.
// Read this file and split it by newline characters ('\n'). You should log
// one Buffer per line.
// Bonus points if you never use .toString().

var fs = require('fs'),
    file = fs.readFileSync(process.argv[2]),
    offset = 0,
    newLine = '\n'.charCodeAt(0);

for (var i = 0; i < file.length; i++) {
  file[i] === newLine ? console.log(file.slice(offset, i)); i++; offset = i;
}
console.log(file.slice(offset, i));
