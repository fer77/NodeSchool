function duckCount() {
      return Array.prototype.slice.call(arguments).filter(function(object) {
      	return Object.prototype.hasOwnProperty.call(object, 'quack');
      }).length;
    }

    module.exports = duckCount;