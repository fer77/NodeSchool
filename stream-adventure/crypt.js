var crypto = require('crypto'),
    passPhrase = process.argv[2],
    encryptedData = 'aes256',
    stream = crypto.createDecipher(encryptedData, passPhrase);
    process.stdin.pipe(stream).pipe(process.stdout);
