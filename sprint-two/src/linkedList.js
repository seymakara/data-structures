class LinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
  }
  
  
  //O(1)
  addToTail(value) {
    var itemToAdd = Node(value);
    
    if (this.head === null) {
      this.head = itemToAdd;
      this.tail = itemToAdd;
    } else {
      this.tail.next = itemToAdd;
      this.tail = itemToAdd;
    }
    
  };
  
  //O(1)
  removeHead() {
    var removed = this.head;
    this.head = this.head.next;
    return removed.value;
  };
  
  //O(n)
  contains(target) {
    var current = this.head;
    while (current) {
      if (current.value === target) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  };

  //return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
