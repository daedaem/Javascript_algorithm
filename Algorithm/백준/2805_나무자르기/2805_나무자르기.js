let [[N, M], input] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

input.sort((a, b) => a - b);

const bsSearch = (mid) => {
  let sum = 0;
  for (let i = N - 1; i >= 0; i--) {
    if (input[i] > mid) {
      sum += input[i] - mid;
    }
    if (sum >= M) return true;
  }
  return false;
};

const solve = () => {
  let maxValue = 0;

  let start = 0;
  let end = input[N - 1];
  let mid;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    const res = bsSearch(mid);
    if (!res) end = mid - 1;
    else {
      if (mid > maxValue) maxValue = mid;
      start = mid + 1;
    }
  }
  return maxValue;
};
console.log(solve());
