class Set{
  constructor(){
    this.storage = {};
  }

  // O(1)
  add(item) {
    this.storage[item] = item;
  };

  // O(1)
  contains(item) {
    if (item in this.storage) {
      return true;
    }
    return false;
  };

  // O(1)
  remove(item) {
    delete this.storage[item];
  };
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
//edge case: keep track of num of items