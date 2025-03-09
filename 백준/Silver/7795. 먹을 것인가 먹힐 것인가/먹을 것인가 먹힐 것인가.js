const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const testcase = parseInt(input.shift());
const result = [];

for (let i = 0; i < testcase; i++) {
  let BIndex = 0;
  let nowresult = 0;

  const [Anum, Bnum] = input.shift().split(" ");
  const Aarr = input
    .shift()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const Barr = input
    .shift()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  for (const A of Aarr) {
    while (A > Barr[BIndex] && BIndex < Bnum) {
      BIndex++;
    }
    nowresult += BIndex;
  }
  result.push(nowresult);
}

console.log(result.join(" "));
