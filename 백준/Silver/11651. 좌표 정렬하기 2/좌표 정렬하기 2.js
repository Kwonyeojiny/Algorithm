const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = input.shift();
const arr = input.map((arr) => arr.split(" ").map(Number));

arr.sort((a, b) => a[1] - b[1] || a[0] - b[0]);
console.log(arr.map((n) => n.join(" ")).join("\n"));
