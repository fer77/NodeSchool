var combiner = require('stream-combiner'),
    through = require('through2'),
    split = require('split'),
    gzip = require('zlib');

  module.exports = function() {
      var list = through(write, end),
          current;
      
      function write(buffer, encoding, next) {
          if (buffer.length === 0) return next();
          var row = JSON.parse(buffer);
          
          if (row.type === 'genre') {
              if (current) {
                  this.push(JSON.stringify(current) + '\n');
              }
              current = { name: row.name, books: [] };
          }
          else if (row.type === 'book') {
              current.books.push(row.name);
          }
          next();
      }
      function end(next) {
          if (current) {
              this.push(JSON.stringify(current) + '\n');
          }
          next();
      }
      
      return combiner(split(), list, gzip.createGzip());
  };