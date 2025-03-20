const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arrN = input[1].split(" ").map(Number);
const arrM = input[3].split(" ").map(Number);

let cardCount = new Map();

for (let num of arrN) {
  if (cardCount.has(num)) {
    cardCount.set(num, cardCount.get(num) + 1);
  } else {
    cardCount.set(num, 1);
  }
}

let result = [];

for (let num of arrM) {
  result.push(cardCount.get(num) || 0);
}

console.log(result.join(" "));