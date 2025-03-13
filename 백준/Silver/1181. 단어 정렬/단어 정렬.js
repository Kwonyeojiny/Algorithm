const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input.shift();

const s_arr = [...new Set(input)];

console.log(
  s_arr.sort((a, b) => a.length - b.length || a.localeCompare(b)).join("\n")
);
