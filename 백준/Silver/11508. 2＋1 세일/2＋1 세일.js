const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const N = parseInt(input.shift());
const object = input.map(Number).sort((a, b) => b - a);
let pay = 0;

for (let i = 0; i < N; i++) {
  if ((i + 1) % 3 !== 0) pay += object[i];
}
console.log(pay);
