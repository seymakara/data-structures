var Queue = function() {
  this.storage = {}
  this.head = 0
  this.tail = 0
};
  
Queue.prototype.enqueue = function(value){
  this.storage[this.head] = value
  this.head ++
}

Queue.prototype.dequeue = function(){
  if(this.head - this.tail === 0){
    return 0;
  }
  var result = this.storage[this.tail];
  delete this.storage[this.tail];
  this.tail++;
  return result;
}

Queue.prototype.size = function(){
  return this.head - this.tail
}




