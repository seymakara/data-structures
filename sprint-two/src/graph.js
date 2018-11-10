

// Instantiate a new graph
var Graph = function() {
  this.list = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.list[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this.list){
    if(key == node){ //not checking strict as keys are stored as strings in objs
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var key in this.list){
    this.removeEdge(key, node);
  };
  delete this.list[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.list[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.list[fromNode].push(toNode);
  this.list[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var indexToNode = this.list[fromNode].indexOf(toNode);
  var indexFromNode = this.list[toNode].indexOf(fromNode);
  delete this.list[fromNode][indexToNode];
  delete this.list[toNode][indexFromNode];
  
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.list){
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


