class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  push(element) {
    this.items[this.count] = element;
    this.count++;
    return this.items;
  }

  pop() {
    if (this.count === 0) {
      return undefined;
    }
    let deletedItem = this.items[this.count - 1];
    this.count--;
    console.log(`deleted item is ${deletedItem}`);
    return deletedItem;
  }
}

const stack = new Stack();

stack.push(12);
stack.push(13);
stack.pop();
