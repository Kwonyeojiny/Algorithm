const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim()

const num = Number(input);
let result = "";

for (i = 1; i <= num; i++) {
  for (j = 1; j <= i; j++) result += "*";
  result += `\n`;
}

console.log(result);