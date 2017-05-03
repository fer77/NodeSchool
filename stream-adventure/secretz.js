var crypto = require('crypto'),
    zlib = require('zlib'),
    tar = require('tar'),
    concat = require('concat-stream'),
    encryptedData = process.argv[2],
    passPhrase = process.argv[3],
    cipher = crypto.createDecipher(encryptedData, passPhrase),
    parser = tar.Parse(),
    gunZip = zlib.createGunzip();

    parser.on('entry', function (entry) {
            if (entry.type !== 'File') return;

            var hex = crypto.createHash('md5', { encoding: 'hex' });

            entry.pipe(hex).pipe(concat(function(hash) {
              
              console.log(hash + ' ' + entry.path);
            }));
        });

    process.stdin.pipe(cipher)
                 .pipe(gunZip)
                 .pipe(parser);