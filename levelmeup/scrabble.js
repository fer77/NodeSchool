module.exports.init = function (db, words, callback) {
  var batch = words.map(function(word) {
    var key = word.length + '!' + word;
    return {
      type: 'put',
      key: key,
      value: word
    };
    });
  db.batch(batch, callback);
}  
       
module.exports.query = function (db, word, callback) {
  // insert each word in the words array here  
  var words = [],
  // `word` may have '*' chars to denote single-letter wildcards  
      key = word.length + '!' + word.replace(/\*/g, ''),
      error;

      db.createReadStream({start: key, end: key + '\xff'})
        .on('data', function (data) {
          words.push(data.value);
        })
        .on('error', function(err) {
          error = err;
        })
  // call callback(err, results) with an array of matching words  
        .on('end', function() {
          callback(error, words);
        });
} 