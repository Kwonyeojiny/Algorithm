const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const nameList = [];
const nameMap = new Map();

for (let i = 1; i <= N; i++) {
  const name = input[i];
  nameList[i] = name;
  nameMap.set(name, i);
}

const result = [];

for (let i = N + 1; i <= N + M; i++) {
  const query = input[i];

  if (!isNaN(query)) {
    const idx = Number(query);
    result.push(nameList[idx]);
  } else {
    result.push(nameMap.get(query));
  }
}

console.log(result.join("\n"));
