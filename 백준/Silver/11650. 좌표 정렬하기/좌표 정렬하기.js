const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input[0];
let arr = [];

for (let i = 1; i < input.length; i++) {
  arr.push(input[i].split(" ").map(Number));
}

arr.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

let ans = [];

for (let i = 0; i < arr.length; i++) {
  ans.push(arr[i].join(" "));
}

console.log(ans.join("\n"));