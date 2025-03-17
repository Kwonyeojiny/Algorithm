const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [N, K] = input;
const queue = Array.from({ length: N }, (_, i) => i + 1);
const result = [];

let index = 0;
while (queue.length) {
  index = (index + K - 1) % queue.length;
  result.push(queue.splice(index, 1)[0]);
}

console.log(`<${result.join(", ")}>`);