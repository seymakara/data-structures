var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size  = 0
  var counter = 1

  // Implement the methods below
  someInstance.push = function(value) {
    storage[counter] = value
    counter ++
    size ++
    console.log("push", storage)
    // return someInstance
  };

  someInstance.pop = function() {
    if(size === 0){
      return size
    }
    counter--;
    var result = storage[counter];
    delete storage[counter];
    size --
    return result;
  };

  someInstance.size = function() {
    return size
  };

  return someInstance;
};
