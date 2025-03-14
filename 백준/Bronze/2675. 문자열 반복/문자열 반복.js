const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = input.shift();

for (let i = 0; i < input.length; i++) {
  const [R, S] = input[i].split(" ");
  let line = "";
  for (let j = 0; j < S.length; j++) {
    for (let k = 0; k < R; k++) {
      line += S[j];
    }
  }
  console.log(line);
}
