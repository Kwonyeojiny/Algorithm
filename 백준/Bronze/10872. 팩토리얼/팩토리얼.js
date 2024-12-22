const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim()

const n = Number(input);

const fac = (n) => {
  if (n <= 1) return 1;
  return fac(n - 1) * n;
};

console.log(fac(n));