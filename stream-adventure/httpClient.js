var request = require('request'),
    url = 'http://localhost:8099'
	reqpost = request.post(url);

process.stdin.pipe(reqpost).pipe(process.stdout);
