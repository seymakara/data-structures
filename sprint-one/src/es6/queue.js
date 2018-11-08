class Queue {
  constructor() {
    this.storage = {}
    this.head = 0
    this.tail = 0
  }

  enqueue(value){
    this.storage[this.head] = value
    this.head ++
  }
  
  dequeue(){
    if(this.head - this.tail === 0){
      return 0;
    }
    var result = this.storage[this.tail];
    delete this.storage[this.tail];
    this.tail++;
    return result;
  }
  
  size(){
    return this.head - this.tail
  }

}
