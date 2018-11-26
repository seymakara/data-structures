
// Instantiate a new graph
class Graph {
  constructor(){
    this.list = {};
  }


//O(1)
// Add a node to the graph, passing in the node's value.
  addNode(node) {
    this.list[node] = [];
  };

  //O(n)
  // Return a boolean value indicating if the value passed to contains is represented in the graph.
  contains(node) {
    for (var key in this.list) {
      if (key === String(node)) { //not checking strict as keys are stored as strings in objs
        return true;
      }
    }
    return false;
  };

  //O(n)
  // Removes a node from the graph.
  removeNode(node) {
    for (var key in this.list) {
      this.removeEdge(key, node);
    }
    delete this.list[node];
  };

  //O(n)
  // Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
  hasEdge(fromNode, toNode) {
    return this.list[fromNode].includes(toNode);
  };

  //O(1)
  // Connects two nodes in a graph by adding an edge between them.
  addEdge(fromNode, toNode) {
    this.list[fromNode].push(toNode);
    this.list[toNode].push(fromNode);
  };

  //O(n)
  // Remove an edge between any two specified (by value) nodes.
  removeEdge(fromNode, toNode) {
    var indexToNode = this.list[fromNode].indexOf(toNode);
    var indexFromNode = this.list[toNode].indexOf(fromNode);
    delete this.list[fromNode][indexToNode];
    delete this.list[toNode][indexFromNode];
    
  };

  //O(n)
  // Pass in a callback which will be executed on each node of the graph.
  forEachNode(cb) {
    for (var key in this.list) {
      cb(key);
    }
  };
}

  /*
  * Complexity: What is the time complexity of the above functions?
  */


