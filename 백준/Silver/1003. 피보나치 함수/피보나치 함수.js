const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [T, ...arr] = input;

for (let i = 0; i < T; i++) {
  let zero = 1;
  let one = 0;

  for (let j = 0; j < arr[i]; j++) {
    const tmp = zero;
    zero = one;
    one = tmp + one;
  }
  console.log(zero, one);
}
