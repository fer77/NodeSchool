// .carCodeAt() returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index
var period = '.'.charCodeAt(0),
		exclamation = '!'.charCodeAt(0);

process.stdin.on('data', function(buffer) {
	for (var i = 0; i < buffer.length; i++) {
		if (buffer[i] === period){ buffer[i] = exclamation; }
}
console.log(buffer);
});
