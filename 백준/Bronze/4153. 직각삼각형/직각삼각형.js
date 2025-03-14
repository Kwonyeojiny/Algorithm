const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < input.length - 1; i++) {
  const now = input[i]
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a);
  console.log(
    now[0] * now[0] == now[1] * now[1] + now[2] * now[2] ? "right" : "wrong"
  );
}
