var through = require('through2'),
	split = require('split'),
	lineCount = 0,
	write = through(function (buffer, encoding, next) {
		var line = buffer.toString();
		this.push(lineCount % 2 === 0 ? line.toLowerCase() + '\n' : line.toUpperCase() + '\n');
		lineCount ++;
		next();
	});

	process.stdin.pipe(split()).pipe(write).pipe(process.stdout);
