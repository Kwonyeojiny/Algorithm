const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [T, ...arr] = input;

let dp = [1, 1, 1];

for (let i = 3; i < 100; i++) {
  dp.push(dp[i - 2] + dp[i - 3]);
}

for (let i = 0; i < T; i++) {
  console.log(dp[arr[i] - 1]);
}