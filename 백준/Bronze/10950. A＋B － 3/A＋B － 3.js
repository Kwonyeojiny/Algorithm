const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = input[0];

for (let i = 1; i < input.length; i++) {
  const [A, B] = input[i].split(" ");
  console.log(Number(A) + Number(B));
}