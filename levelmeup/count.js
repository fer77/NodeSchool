var level = require('level');

module.exports = function (databaseDir, date, callback) {
 // .. your code here
 var db = level(databaseDir),
     tweets = 0,
     error;

     db.createReadStream({ start: date })
        .on('data', function (data) {
          tweets++
        })
        .on('error', function (err) {
      error = err
    })
    .on('end', function () {
      db.close(function (err) {
        callback(error || err, tweets);
      });
    });
 }
