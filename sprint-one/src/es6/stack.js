class Stack {
  constructor() {
    this.storage = {}
    this.length = 0
  }

  push(value){
    this.length++
    console.log(this.length)
    this.storage[this.length] = value
    console.log("storage", this.storage)
  }

  pop(){
    if(this.length === 0){
      return this.length;
    }
    var result = this.storage[this.length];
    delete this.storage[this.length];
    this.length--;
    return result;
  }

  size(){
    return this.length
  }
}