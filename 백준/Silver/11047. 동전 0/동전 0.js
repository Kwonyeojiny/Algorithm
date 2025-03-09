const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let [N, K] = input.shift().split(" ").map(Number);
const money = input.map(Number).sort((a, b) => b - a);
let count = 0;

for (let m of money) {
  count += Math.floor(K / m);
  K %= m;
}

console.log(count);