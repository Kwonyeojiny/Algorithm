const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const N = input.shift();
const stack = [];
const answer = [];

for (let i = 0; i < N; i++) {
  const [a, b] = input[i].split(" ");
  switch (a) {
    case "push":
      stack.push(b);
      break;
    case "pop":
      answer.push(stack.length ? stack.pop() : -1);
      break;
    case "size":
      answer.push(stack.length);
      break;
    case "empty":
      answer.push(stack.length ? 0 : 1);
      break;
    case "top":
      answer.push(stack.length ? stack[stack.length - 1] : -1);
      break;
  }
}

console.log(answer.join("\n"));