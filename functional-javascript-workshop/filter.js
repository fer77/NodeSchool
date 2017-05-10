function getShortMessages(messages) {
      return messages.filter(function(array) {
      	return array.message.length < 50;
      }).map(function(array) {
      	return array.message;
      });
    }

    module.exports = getShortMessages;