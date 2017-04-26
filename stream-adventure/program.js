var fs = require('fs'),
    pathToFile = process.argv[2],
    file = fs.createReadStream(pathToFile).pipe(process.stdout);