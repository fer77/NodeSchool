function repeat(operation, num) {
  // Modify this so it doesn't cause a stack overflow!
  if (num <= 0) {
    return function() {
      operation();
      return repeat(operation, --num);
    } 
  };
};

function trampoline(fn) {
  while (fn && fn instanceof Function) {
    fn = fn();
  };
};

module.exports = function(operation, num) {
  // You probably want to call your trampoline here!
  return trampoline(function() {
    return repeat(operation, num);
  });
};
