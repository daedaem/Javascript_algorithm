const input = require("fs")
  .readFileSync("./2775.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => Number(el.trim()));

const T = Number(input[0]);
for (let tc = 0; tc < T; tc++) {
  const K = input[tc * 2 + 1];
  const N = input[(tc + 1) * 2];
  let dp = [...Array(N + 1).keys()];
  //   console.log(dp);
  //   console.log(dp);
  for (let r = 0; r < K; r++) {
    for (let c = 1; c <= N; c++) {
      dp[c] += dp[c - 1];
    }
  }
  console.log(dp[N]);
}
