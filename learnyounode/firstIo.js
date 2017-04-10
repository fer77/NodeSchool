var fs = require('fs')

var  args = process.argv[2];

    file = fs.readFileSync(args);

     lines= file.toString();

console.log(lines.split('\n').length - 1);
