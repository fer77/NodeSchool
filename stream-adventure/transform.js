var through = require('through2');

var	write = through(function (buffer, encoding, next) {
	this.push(buffer.toString().toUpperCase());
	next();
});

process.stdin.pipe(write).pipe(process.stdout);