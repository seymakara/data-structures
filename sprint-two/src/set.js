var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = {};
  // set.count = 0
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this.storage[item] = item
};

setPrototype.contains = function(item) {
  if (item in this.storage) {
    return true
  }
  return false
};

setPrototype.remove = function(item) {
  delete this.storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
//edge case: keep track of num of items