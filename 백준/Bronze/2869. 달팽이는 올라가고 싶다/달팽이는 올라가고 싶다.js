const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(' ')

const a = +input[0]; // 낮 올라감
const b = +input[1]; // 밤 내려감
const v = +input[2]; // 나무의 높이

let date = Math.ceil((v - b) / (a - b));

console.log(date);