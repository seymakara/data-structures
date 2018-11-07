var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var head = 0
  var tail = 0

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[head] = value
    head ++
  };

  someInstance.dequeue = function() {
    if((head - tail) === 0 ){
      return 0
    }
    var result = storage[tail]
    delete storage[tail]
    tail ++
    // console.log("res", result)
    return result
  };

  someInstance.size = function() {
    return head - tail

  };

  return someInstance;
};
