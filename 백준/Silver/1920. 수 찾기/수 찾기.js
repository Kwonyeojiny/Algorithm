const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, A, M, B] = input.map((v) => v.split(" ").map(Number));

A.sort((a, b) => a - b);

const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return true;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return false;
};

const result = [];

for (let i = 0; i < M; i++) {
  result.push(binarySearch(A, B[i]) ? 1 : 0);
}

console.log(result.join("\n"));