process.stdin.once('data', function(buff) {
 var int8View = new Int8Array(buff);
 console.log(JSON.stringify(int8View));
});
