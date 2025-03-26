const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [T, ...arr] = input;

const cnt = [0];
cnt[1] = 1;
cnt[2] = 2;
cnt[3] = 4;

for (let i = 4; i < 11; i++) {
  cnt[i] = cnt[i - 1] + cnt[i - 2] + cnt[i - 3];
}

for (let i = 0; i < T; i++) {
  console.log(cnt[arr[i]]);
}
