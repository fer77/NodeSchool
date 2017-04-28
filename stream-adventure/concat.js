var concat = require('concat-stream');

process.stdin.pipe(concat(function(src) {
	var text = src.toString().split('').reverse().join('');
	console.log(text);
}));