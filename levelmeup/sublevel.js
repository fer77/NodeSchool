var level = require('level');

module.exports = function (databaseDir, callback) {
	var sl = require('level-sublevel'),
		db = sl(level(databaseDir)),
		error;
	db.on('error', function(err) {
		error = err;
	});
	//put a key into the sub-section! 
	var robots = db.sublevel('robots');
		robots.put('slogan', 'beep boop');
		
	var dinosaurs = db.sublevel('dinosaurs');
		dinosaurs.put('slogan', 'rawr');
		
	db.close(function(err) {
		callback(error || err );
	});
}