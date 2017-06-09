var level = require('level'),
    through = require('through2');

module.exports = function (databaseDir) {
 var resultStream;
 // your code...
 var db = level(databaseDir);
 return db.createReadStream();
    .pipe(through({objectMode: true}, function (data, enc, next) {
      this.push(data.key + '=' + data.value);
      next();
    }, function (next) {
      db.close(next);
    }));
}
