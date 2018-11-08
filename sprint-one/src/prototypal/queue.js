var Queue = function() {
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {}
  newQueue.head = 0
  newQueue.tail = 0

  return newQueue
};

var queueMethods = {};

queueMethods.enqueue = function(value){
    this.storage[this.head] = value
    this.head ++
}

queueMethods.dequeue = function(){
  if(this.head - this.tail === 0 ){
    return 0
  }
  var result = this.storage[this.tail]
  // console.log("storage", this.storage[this.tail])
  // console.log("res", result)
  delete this.storage[this.tail]
  this.tail ++
  return result
}   

queueMethods.size = function(){
  return this.head - this.tail
}


