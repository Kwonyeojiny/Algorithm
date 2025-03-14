const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = input.shift();
const sortArr = [...new Set(input.sort((a, b) => a - b))];
console.log(sortArr.join("\n"));
