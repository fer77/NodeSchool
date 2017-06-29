// Write a program that combines all of the buffers from process.stdin
// and then writes the single big buffer out to the console.
// Bonus points if you use a stream!
var concat = require('concat-stream')

process.stdin.pipe(concat(function(src) {

  var buff = src;
  console.log(buff);
}));
