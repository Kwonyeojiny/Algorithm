const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const len = input.shift();
console.log(input.sort((a, b) => a.split(" ")[0] - b.split(" ")[0]).join("\n"));