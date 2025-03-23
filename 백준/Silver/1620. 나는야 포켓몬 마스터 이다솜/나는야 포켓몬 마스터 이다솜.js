const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const poketmons = input.slice(1, N + 1);
const questions = input.slice(N + 1);

const map = new Map(
  poketmons.map((poketmons, index) => [poketmons, index + 1])
);
questions.forEach((question) => {
  if (Number.isNaN(+question)) console.log(map.get(question));
  else console.log(poketmons[+question - 1]);
});
