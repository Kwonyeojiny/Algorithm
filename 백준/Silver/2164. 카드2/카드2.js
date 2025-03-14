const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

class Deque {
  constructor() {
    this.data = [];
    this.head = 0;
    this.tail = 0;
  }

  push(value) {
    this.data[this.tail++] = value;
  }

  popFront() {
    return this.data[this.head++];
  }

  front() {
    return this.data[this.head];
  }

  size() {
    return this.tail - this.head;
  }
}

const queue = new Deque();

for (let i = 1; i <= Number(input); i++) {
  queue.push(i);
}

while (queue.size() > 1) {
  queue.popFront();
  queue.push(queue.popFront());
}

console.log(queue.front());