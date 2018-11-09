var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var itemToAdd = Node();
    itemToAdd.value = value
    
    if (list.head === null) {
      list.head = itemToAdd
    }else{
      var current = list.head
      while(current.next !== null){
        current =current.next
      }
      current.next = itemToAdd
    }
    return list.head
    
  };

  list.removeHead = function() {
  };

  list.contains = function(target) {
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
