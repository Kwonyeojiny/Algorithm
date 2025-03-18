const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
let sum = 0;
let maxsum = 0;

for (let i = 0; i < N - 2; i++) {
  for (let j = i + 1; j < N - 1; j++) {
    for (let k = j + 1; k < N; k++) {
      sum = arr[i] + arr[j] + arr[k];
      if (sum <= M && sum > maxsum) maxsum = sum;
    }
  }
}

console.log(maxsum);