var spawn = require('child_process').spawn,
	duplexer = require('duplexer2');

module.exports = function (cmd, args) {
  var child = spawn(cmd, args); // spawn the process and return a single stream
  return duplexer(child.stdin, child.stdout) // joining together the stdin and stdout here
}