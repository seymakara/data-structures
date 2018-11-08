var Stack = function() {
    this.storage = {}
    this.length = 0
};
  
Stack.prototype.push = function(value){
    this.length++
    console.log(this.length)
    this.storage[this.length] = value
    console.log("storage", this.storage)
}

Stack.prototype.pop = function(){
  if(this.length === 0){
    return this.length;
  }
  var result = this.storage[this.length];
  delete this.storage[this.length];
  this.length--;
  return result;
}

Stack.prototype.size = function(){
  return this.length
}


