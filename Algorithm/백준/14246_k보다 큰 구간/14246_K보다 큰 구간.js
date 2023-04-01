let [[N], ...arr] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .split("\n")
  .map((el) =>
    el
      .trim()
      .split(" ")
      .map((el) => Number(el.trim()))
  );
const K = arr.pop()[0];
arr = arr[0];
const sumTable = new Array(N + 1).fill(0);
for (let i = 0; i <= N; i++) {
  if (i > 0) {
    sumTable[i] = arr[i - 1] + sumTable[i - 1];
  }
}

let cnt = arr.filter((el) => el > K).length;
for (let j = 0; j < N; j++) {
  for (let i = 2; i + j <= N; i++) {
    // console.log(j, j + i);
    if (sumTable[j + i] - sumTable[j] > K) {
      cnt += N - j - i + 1;
      break;
    }
  }
}
console.log(cnt);
