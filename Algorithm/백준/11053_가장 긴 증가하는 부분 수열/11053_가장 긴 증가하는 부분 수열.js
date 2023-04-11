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
