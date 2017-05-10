function countWords(inputWords) {
      return inputWords.reduce(function(wordCount, word) {
      	wordCount[word] ? wordCount[word] +=1 : wordCount[word] = 1;
      	return wordCount;
      }, {});
    };

    module.exports = countWords;