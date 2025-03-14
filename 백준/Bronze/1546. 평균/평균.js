const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input[0];
const arr = input[1].split(" ");

const maxScore = Math.max(...arr);

let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += (arr[i] / maxScore) * 100;
}

console.log(sum / arr.length);
