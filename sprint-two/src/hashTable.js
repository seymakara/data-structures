class HashTable {
  constructor(){
    this._limit = 8;
    this._storage = LimitedArray(this._limit);
  }

  // O(n) but probably O(1)
  insert(k, v) {
    var index = getIndexBelowMaxForKey(k, this._limit);
    var indexBucket = this._storage.get(index);
    
    if (indexBucket === undefined) {
      this._storage.set(index, [[k, v]]); 
    } else { 
      for (var i = 0; i < indexBucket.length; i++) {
        if (indexBucket[i][0] === k) {
          indexBucket[i][1] = v;
        } else {
          indexBucket.push([k, v]); 
        }
      }
      this._storage.set(index, indexBucket);
    }
  };

  //O(n) but probably O(1)
  retrieve(k) {
    var index = getIndexBelowMaxForKey(k, this._limit);
    var indexBucket = this._storage.get(index);
    var result;
    for (var i = 0; i < indexBucket.length; i ++) {
      if (indexBucket[i][0] === k) {
        result = indexBucket[i][1];
      }
    }
    return result;
  };

  //O(n) but probably O(1)
  remove(k) {
    var index = getIndexBelowMaxForKey(k, this._limit);
    var indexBucket = this._storage.get(index);
    for (var i = 0; i < indexBucket.length; i ++) {
      if (indexBucket[i][0] === k) {
        return indexBucket.splice(i, 1);
      }
    }
  };
}



/*
 * Complexity: What is the time complexity of the above functions?
 */


