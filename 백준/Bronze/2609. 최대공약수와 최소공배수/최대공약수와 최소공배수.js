const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

console.log(gcd(input[0], input[1]));
console.log(lcm(input[0], input[1]));
