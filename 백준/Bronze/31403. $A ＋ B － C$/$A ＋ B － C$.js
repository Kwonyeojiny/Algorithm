const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [A, B, C] = input;

console.log(A + B - C + "\n" + (String(A) + String(B) - String(C)));
