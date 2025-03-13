const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const answer = [];
const arr = input.map(Number);
const max = Math.max(...arr);
answer.push(max);

for (let i = 0; i < arr.length; i++) {
  if (max == arr[i]) answer.push(i + 1);
}

console.log(answer.join("\n"));