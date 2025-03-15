const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const pop = input.pop();

for (el of input) {
  const reverse = el.split("").reverse().join("");
  console.log(el == reverse ? "yes" : "no");
}
