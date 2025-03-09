const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const people = parseInt(input.shift());
const sortTime = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let perTime = 0;
let allTime = 0;

for (const time of sortTime) {
  perTime += time;
  allTime += perTime;
}

console.log(allTime);
