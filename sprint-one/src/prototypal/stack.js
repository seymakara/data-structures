var Stack = function() {
  var newStack = Object.create(stackMethods);
  newStack.storage = {}
  newStack.length = 0

  return newStack
};

var stackMethods = {};

stackMethods.push = function(value){
    this.length++
    console.log(this.length)
    this.storage[this.length] = value
    console.log("storage", this.storage)
}

stackMethods.pop = function(){
  if(this.length === 0){
    return this.length;
  }
  var result = this.storage[this.length];
  delete this.storage[this.length];
  this.length--;
  return result;
}

stackMethods.size = function(){
  return this.length
}



