  var duplexer = require('duplexer2'),
      through = require('through2').obj;
  
  module.exports = function (counter) {
      var counts = {},
          input = through(write, end);
// return a duplex stream to count countries on the writable side
      return duplexer({objectMode: true}, input, counter);
      
      function write (buffer, encoding, next) {
          counts[buffer.country] = (counts[buffer.country] || 0) + 1;
          next();
      }
      // and pass through `counter` on the readable side
      function end (done) {
          counter.setCounts(counts);
          done();
      }
  };