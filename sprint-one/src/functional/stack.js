var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size  = 0
  // var counter = 1

  // Implement the methods below
  someInstance.push = function(value) {
    size ++
    storage[size] = value
    console.log("push", storage)
    // return someInstance
  };

  someInstance.pop = function() {
    if(size === 0){
      return size
    }
    var result = storage[size];
    delete storage[size];
    size--;
    return result;
  };

  someInstance.size = function() {
    return size
  };

  return someInstance;
};
