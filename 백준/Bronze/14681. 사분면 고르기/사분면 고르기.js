const fs = require('fs');
const input = fs.readFileSync(0, "utf-8").toString().trim().split('\n')

const x = Number(input[0]);
const y = Number(input[1]);

if (x > 0 && y > 0) console.log(1);
if (x < 0 && y > 0) console.log(2);
if (x < 0 && y < 0) console.log(3);
if (x > 0 && y < 0) console.log(4);
