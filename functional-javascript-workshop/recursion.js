function reduce(arr, fn, initial) {
      return arr.reduce(function(index, value) {
      	index[value] ? index[value] +=1 : index[value] = 1;
      	return index;
      }, {});
    }

    module.exports = reduce;