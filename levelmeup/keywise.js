var level = require('level');

module.exports = function (databaseDir, jsonPath, callback) {
 var db = level(databaseDir, { valueEncoding: 'json' }),
     data = require(jsonPath);// loads and parses JSON into a JavaScript object.
     
var read = data.map(function(row) {
  var key;
  if (row.type === 'user') {
    key = row.name;
  } else if ( row.type === 'repo') {
    key = row.user + '!' + row.name;
  } return {
    type: 'put',
    key: key,
    value: row
  }
});
    db.batch(read, function (error) {
      db.close(function (err) {
        callback(error || err);
      });
    });
 }
