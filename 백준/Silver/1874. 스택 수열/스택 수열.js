const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, ...arr] = input.map(Number);
let stack = [];
let result = [];
let current = 1;

for (let num of arr) {
  while (current <= num) {
    stack.push(current);
    result.push("+");
    current++;
  }
  if (stack[stack.length - 1] === num) {
    stack.pop();
    result.push("-");
  } else {
    console.log("NO");
    return;
  }
}

console.log(result.join("\n"));
