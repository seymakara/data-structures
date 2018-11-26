
class BinarySearchTree {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }

// O(log n)
  insert(value) {
    var child = new BinarySearchTree(value);

    if (value < this.value) {
      if (this.left === null) {
        this.left = child;
      } else {
        this.left.insert(value);
      }
    }
    
    if (value > this.value) {
      if (this.right === null) {
        this.right = child;
      } else {
        this.right.insert(value);
      }
    }
  };

  //O(log n)
  contains(value) {
    if (this.value === value) {
      return true;
    }
    
    if (value < this.value) {
      if (this.left === null) {
        return false;
      } else {
        return this.left.contains(value);
      }
    }
    
    if (value > this.value) {
      if (this.right === null) {
        return false;
      } else {
        return this.right.contains(value); 
      }
    }
  };

  //O(n)
  depthFirstLog(cb) {
    cb (this.value);
    if (this.left) {
      this.left.depthFirstLog(cb);
    }
    if (this.right) {
      this.right.depthFirstLog(cb);
    }
    
  };
}









