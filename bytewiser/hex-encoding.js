// process.argv.slice(2): Remember that the first element of the process.argv array is always 'node', and the second element is always the path to your program.js file, so you need to start at the 3rd element (index 2).
// 'hex': Encode each byte as two hexadecimal characters.
var buffer = new Buffer(process.argv.slice(2).map(Number)).toString('hex')

console.log(buffer);