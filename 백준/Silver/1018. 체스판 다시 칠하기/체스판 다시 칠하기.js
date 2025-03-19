const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [size, ...arr] = input;
const [N, M] = size.split(" ").map(Number);
const answer = [];

const white = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];

const black = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];

function Counter(x, y) {
  let wcount = 0;
  let bcount = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (arr[i + x][j + y] !== white[i][j]) wcount++;
      if (arr[i + x][j + y] !== black[i][j]) bcount++;
    }
  }

  return [wcount, bcount];
}

for (let i = 0; i < N - 7; i++) {
  for (let j = 0; j < M - 7; j++) {
    let [wcount, bcount] = Counter(i, j);
    answer.push(wcount);
    answer.push(bcount);
  }
}

console.log(Math.min(...answer));
