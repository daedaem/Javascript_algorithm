(function solution1() {
  const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

  const [[N], input] = require("fs")
    .readFileSync(filePath)
    .toString()
    .split("\n")
    .map((el) => el.split(" ").map(Number));

  const dp = new Array(N).fill(1);
  for (let i = 1; i < N; i++) {
    for (let j = 0; j < i; j++) {
      if (input[i] > input[j]) {
        dp[i] = Math.max(dp[j] + 1, dp[i]);
      }
    }
  }
  console.log(Math.max(...dp));
})();

(function solution2() {
  const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

  const [[N], input] = require("fs")
    .readFileSync(filePath)
    .toString()
    .split("\n")
    .map((el) => el.split(" ").map(Number));

  const dp = [0];

  const biSearch = (el) => {
    let start = 0;
    let end = dp.length - 1;

    while (start + 1 < end) {
      let mid = Math.floor((start + end) / 2);
      if (dp[mid] < el) {
        start = mid;
      } else if (dp[mid] > el) {
        end = mid;
      } else if (dp[mid] === el) return mid;
    }
    return end;
  };

  for (let i = 0; i < N; i++) {
    if (dp[dp.length - 1] < input[i]) {
      dp.push(input[i]);
    } else if (dp[dp.length - 1] > input[i]) {
      const idx = biSearch(input[i]);
      dp[idx] = input[i];
    }
  }
  console.log(dp.length - 1);
})();
