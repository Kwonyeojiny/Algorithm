const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(' ');

const a = +input[0];
const b = +input[1];
const c = +input[2];


if (a + b === c) console.log(`${a}+${b}=${c}`);
if (a - b === c) console.log(`${a}-${b}=${c}`);
if (a * b === c) console.log(`${a}*${b}=${c}`);
if (a / b === c) console.log(`${a}/${b}=${c}`);
if (b + c === a) console.log(`${a}=${b}+${c}`);
if (b - c === a) console.log(`${a}=${b}-${c}`);
if (b * c === a) console.log(`${a}=${b}*${c}`);
if (b / c === a) console.log(`${a}=${b}/${c}`);
