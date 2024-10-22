class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  push(element) {
    this.items[this.count] = element;
    console.log(`${element} Added To Index ${this.count}`);
    this.count++;
  }
}

const stack = new Stack();

stack.push(12);
stack.push(13);
stack.push(14);
