const N = +require("fs").readFileSync("./input.txt").toString().trim();
console.log(N);
const dp = Array.from({ length: N + 1 }, () => 0);

dp[0] = 0;
dp[1] = 1;
// dp[2] = 1;
// dp[3] = 1;
for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= Math.floor(i / 2); j++) {
    dp[i] += dp[i - j] + dp[j];
  }
}

console.log(dp);
