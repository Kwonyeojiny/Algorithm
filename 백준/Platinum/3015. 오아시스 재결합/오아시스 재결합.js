const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input.shift());
const heights = input.map(Number);
const stack = [];
let result = 0;

for (let i = 0; i < N; i++) {
  const currentHeight = heights[i];

  let count = 1;

  while (stack.length > 0 && stack[stack.length - 1][0] <= currentHeight) {
    const [heights, sameHeightCount] = stack.pop();
    result += sameHeightCount;

    if (heights === currentHeight) {
      count += sameHeightCount;
    }
  }

  if (stack.length > 0) {
    result++;
  }

  stack.push([currentHeight, count]);
}

console.log(result);
