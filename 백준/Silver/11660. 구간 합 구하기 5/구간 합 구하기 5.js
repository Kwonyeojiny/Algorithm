const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = [];
const prefixSum = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));
const answer = [];

for (let i = 1; i <= N; i++) {
  arr.push(input[i].split(" ").map(Number));
}

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    prefixSum[i][j] =
      arr[i - 1][j - 1] +
      prefixSum[i - 1][j] +
      prefixSum[i][j - 1] -
      prefixSum[i - 1][j - 1];
  }
}

for (let i = 0; i < M; i++) {
  const [x1, y1, x2, y2] = input[i + N + 1].split(" ").map(Number);

  const sum =
    prefixSum[x2][y2] -
    prefixSum[x1 - 1][y2] -
    prefixSum[x2][y1 - 1] +
    prefixSum[x1 - 1][y1 - 1];

  answer.push(sum);
}

console.log(answer.join("\n"));