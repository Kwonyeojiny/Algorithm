const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const arr = Array.from({ length: input[0] }, (_, i) => i + 1);
const out = [];

while (arr.length) {
  for (let i = 0; i < input[1]; i++) {
    arr.push(arr.shift());
  }
  out.push(arr.pop());
}

console.log(`<${out.join(", ")}>`);