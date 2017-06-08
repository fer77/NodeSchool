var level = require('level');

module.exports = function (databaseDir, key, callback) {
	// your code...
	var db = level(databaseDir);
	db.get(key, function (error, value) {
       db.close(function(error) {
       		callback(error, value);
       });
   });
}
