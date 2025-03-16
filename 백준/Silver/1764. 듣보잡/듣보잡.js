const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);

const noHear = new Set();
const noSee = new Set();

for (let i = 1; i < input.length; i++) {
  if (i < N + 1) noHear.add(input[i]);
  else noSee.add(input[i]);
}

let answer = [];

noHear.forEach((item) => {
  if (noSee.has(item)) answer.push(item);
});

console.log(answer.length);
console.log(answer.sort().join("\n"));