const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < input[0].length; i++) {
  if (i === Number(input[1]) - 1) console.log(input[0][i]);
}
