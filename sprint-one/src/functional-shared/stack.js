var Stack = function() {
  var stack = {}
    stack.length = 0,
    stack.storage = {}

  extend(stack, stackMethods);
  return stack
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};


// console.log("stackmethods ", stackMethods)

var stackMethods = {}

stackMethods.push = function(value) {
  this.length ++
  this.storage[this.length] = value
  // console.log("push", storage)
  // return someInstance
},

stackMethods.size = function() {
  return this.length;
},

stackMethods.pop = function() {
  if(this.length === 0){
    return length
  }
  var result = this.storage[this.length];
  delete this.storage[this.length];
  this.length--;
  return result;
}


// var Stack = function() {
//   var stack = {
//     length : 0,
//     storage : {}
//   };

//   extend(stack, stackMethods);
//   return stack
// };

// var extend = function(to, from) {
//   for (var key in from) {
//     to[key] = from[key];
//   }
// };


// // console.log("stackmethods ", stackMethods)

// var stackMethods = {

//   push : function(value) {
//     this.length ++
//     this.storage[this.length] = value
//     // console.log("push", storage)
//     // return someInstance
//   },

//   size: function() {
//     return this.length;
//   },

//   pop: function() {
//     if(this.length === 0){
//       return length
//     }
//     var result = this.storage[this.length];
//     delete this.storage[this.length];
//     this.length--;
//     return result;
//   }
// }



