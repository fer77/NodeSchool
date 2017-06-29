var concat = require('concat-stream')

process.stdin.pipe(concat(function(src) {

  var buff = src;
  console.log(buff);
}));
