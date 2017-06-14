var multilevel = require('multilevel'),
	net = require('net');

module.exports = function (callback) {
// Create a TCP connection with the core net module to port 4545 on localhost.
	var db = multilevel.client(),
		connection = net.connect(4545);

// Pipe this connection through a multilevel RPC stream and back to the connection.
	connection.pipe(db.createRpcStream()).pipe(connection);

// Fetch the value from the data store with the key multilevelmeup and print it to the console.
	db.get('multilevelmeup', function (err, value) {
// close the connection after you have fetched the value!
	connection.end(function() {
		if (err) return console.log('Ooops!', err) // likely the key was not found 
		// ta da!
		callback(err, value);
	});
  });
};