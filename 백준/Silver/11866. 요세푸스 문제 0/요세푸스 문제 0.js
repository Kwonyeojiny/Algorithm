const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")

const queue = Array.from({ length: Number(input[0]) }, (_, i) => i + 1);
const result = [];

let index = 0;
while (queue.length) {
  index = (index + Number(input[1]) - 1) % queue.length;
  result.push(queue.splice(index, 1)[0]);
}

console.log(`<${result.join(", ")}>`);