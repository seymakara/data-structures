class Tree {
  constructor(value){
    this.value = value;
    this.children = []
  }
  // O(1)
  addChild(value) {
    var childNode = new Tree(value)
    this.children.push(childNode)
  };

  // O(n)
  contains(target) {
    if (this.value === target){
      return true
    }else{
      if (this.children){
        for(var i = 0; i < this.children.length; i++){
          if(this.children[i].contains(target) === true){
            return true
          }
        }
      }
    }
    return false
  };
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
