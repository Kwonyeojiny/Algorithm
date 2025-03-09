const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const bombString = input[0];
const bomb = input[1];
const stack = [];

for (let i = 0; i < bombString.length; i++) {
  stack.push(bombString[i]);

  if (
    stack.length >= bomb.length &&
    stack.slice(-bomb.length).join("") === bomb
  )
    stack.splice(-bomb.length);
}

console.log(stack.length ? stack.join("") : "FRULA");
