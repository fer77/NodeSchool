// var through = require('through2'),
// 	split = require('split'),
// 	lineCount = 0,
// 	write = through(function (buffer, encoding, next) {
// 		var line = buffer.toString();
// 		this.push(lineCount % 2 === 0 ? line.toLowerCase() + '\n' : line.toUpperCase() + '\n');
// 		lineCount ++;
// 		next();
// 	});
//
// 	process.stdin.pipe(split()).pipe(write).pipe(process.stdout);

var fs = require('fs'),
    file = fs.readFileSync(process.argv[2]),
    offset = 0,
    newLine = '\n'.charCodeAt(0);

for (var i = 0; i < file.length; i++) {
  file[i] === newLine ? console.log(file.slice(offset, i)); i++; offset = i;
}
console.log(file.slice(offset, i));
