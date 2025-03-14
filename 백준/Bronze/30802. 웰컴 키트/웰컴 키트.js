const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);
const [T, P] = input[2].split(" ").map(Number);
let t = 0;

for (let i = 0; i < arr.length; i++) {
  t += Math.ceil(arr[i] / T);
}

console.log(t.toString());
console.log(`${Math.floor(N / P)} ${N % P}`);