// module.exports = function arrayMap(arr, fn) {
//   return arr.map(fn);
// };

module.exports = function arrayMap(arr, fn) {
    return arr.reduce(function (prev, curr) {
        prev.push(fn.call(null, curr));
        return prev;
    }, []);
};