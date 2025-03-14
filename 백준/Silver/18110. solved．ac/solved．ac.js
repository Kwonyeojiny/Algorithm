const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const N = input.shift();

if (N === 0) {
  console.log(0);
  process.exit();
}

const sortArr = [...input].sort((a, b) => a - b);

const slice = Math.round(N * 0.15);

let sum = 0;

for (let i = slice; i < sortArr.length - slice; i++) {
  sum += sortArr[i];
}

console.log(Math.round(sum / (sortArr.length - slice * 2)));