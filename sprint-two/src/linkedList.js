var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var itemToAdd = Node(value);
    
    if (list.head === null) {
      list.head = itemToAdd;
      list.tail = itemToAdd;
    } else {
      list.tail.next = itemToAdd;
      list.tail = itemToAdd;
    }
    
  };

  list.removeHead = function() {
    var removed = list.head;
    list.head = list.head.next;
    return removed.value;
  };

  list.contains = function(target) {
    var current = list.head;
    while (current) {
      if (current.value === target) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  };

  return list;
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
