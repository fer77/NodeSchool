var level = require('level');

// ISO date format will always sort our tweets in date/time order in our data store without any special work on our part.
module.exports = function (databaseDir, date, callback) {
 var db = level(databaseDir),
     tweets = [],
     error;
     
// To restrict the range of entries perform a "range query". By default the range is the whole store, but can be narrowed to a start and/or end key.
     db.createReadStream({ gte: date, lte: date + '\xff' })
        .on('data', function (data) {
          tweets.push(data.value);
        });
        .on('error', function (err) {
      error = err;
    });
    .on('end', function () {
      db.close(function (err) {
        callback(error || err, tweets);
      });
    });
 }
