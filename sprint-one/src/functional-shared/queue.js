var Queue = function() {
  var queue = {}
    queue.storage = {},
    queue.head = 0,
    queue.tail = 0


  extend(queue, queueMethods);
  return queue;
}

var extend = function(to, from) {
  for (var key in from) {
      to[key] = from[key];
  }
};

var queueMethods = {}

queueMethods.enqueue = function(value) {
    this.storage[this.head] = value
    this.head ++
}

queueMethods.size = function() {
  return this.head - this.tail
}
queueMethods.dequeue = function() {
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


// var Queue = function() {
//   var queue = {
//     storage: {},
//     head: 0,
//     tail: 0
//   };

//   extend(queue, queueMethods);
//   return queue;
// }

// var extend = function(to, from) {
//   for (var key in from) {
//       to[key] = from[key];
//   }
// };

// var queueMethods = {
//   enqueue: function(value) {
//     this.storage[this.head] = value
//     this.head ++
//   },
//   size: function() {
//     return this.head - this.tail
//   },
//   dequeue: function() {
//     if(this.head - this.tail === 0 ){
//         return 0
//     }
//     var result = this.storage[this.tail]
//     // console.log("storage", this.storage[this.tail])
//     // console.log("res", result)
//     delete this.storage[this.tail]
//     this.tail ++
//     return result
//   }
// }





