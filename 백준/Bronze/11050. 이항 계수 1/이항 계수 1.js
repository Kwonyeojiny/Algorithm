const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const [N, K] = input.split(" ").map(Number);

const fac = (n) => {
  if (n <= 1) return 1;
  return n * fac(n - 1);
};

console.log(fac(N) / (fac(K) * fac(N - K)));
