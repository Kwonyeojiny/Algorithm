const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arrN = input[1]
  .split(" ")
  .sort((a, b) => b - a)
  .map(Number);
const arrM = input[3].split(" ").map(Number);

let answer = [];
let Card = new Map();

for (num of arrN) {
  if (Card.has(num)) Card.set(num, Card.get(num) + 1);
  else Card.set(num, 1);
}

for (num of arrM) {
  if (Card.has(num)) answer.push(Card.get(num));
  else answer.push(0);
}

console.log(answer.join(" "));