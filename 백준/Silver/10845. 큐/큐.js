const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const N = input.shift();
const queue = [];
const answer = [];

for (let i = 0; i < N; i++) {
  const [a, b] = input[i].split(" ");
  switch (a) {
    case "push":
      queue.push(b);
      break;
    case "pop":
      answer.push(queue.length ? queue.shift() : -1);
      break;
    case "size":
      answer.push(queue.length);
      break;
    case "empty":
      answer.push(queue.length ? 0 : 1);
      break;
    case "front":
      answer.push(queue.length ? queue[0] : -1);
      break;
    case "back":
      answer.push(queue.length ? queue[queue.length - 1] : -1);
      break;
  }
}

console.log(answer.join("\n"));
