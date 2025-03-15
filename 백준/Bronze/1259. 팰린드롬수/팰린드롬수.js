const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < input.length - 1; i++) {
  const reverse = input[i].split("").reverse().join("");
  console.log(input[i] == reverse ? "yes" : "no");
}
