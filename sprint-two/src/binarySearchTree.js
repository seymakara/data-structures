
var BinarySearchTree = function(value) {
  var newBinaryTree = {};
  newBinaryTree.value = value;
  
  newBinaryTree.left = null;
  newBinaryTree.right = null;
  
  extend(newBinaryTree, binaryTreeMethods);
  
  return newBinaryTree;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var binaryTreeMethods = {};

// O(log n)
binaryTreeMethods.insert = function(value) {
  var child = BinarySearchTree(value);

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
binaryTreeMethods.contains = function(value) {
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
binaryTreeMethods.depthFirstLog = function(cb) {
  cb (this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
  
};









