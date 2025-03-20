const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [T, ...arr] = input;

for (let i = 0; i < T; i++) {
  const line = arr[i];
  const stack = [];
  let answer = "YES";

  for (let j = 0; j < line.length; j++) {
    if (line[j] === "(") {
      stack.push(1);
    } else {
      if (!stack.pop()) {
        answer = "NO";
        break;
      }
    }
  }
  if (stack.length !== 0) {
    answer = "NO";
  }
  console.log(answer);
}
