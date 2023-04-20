const N = +require("fs").readFileSync("dev/stdin").toString();

const dp = Array.from({ length: N + 1 }, (_, i) =>
  i === 1 ? 1 : i === 2 ? 2 : 0
);

dp.forEach((_, i) => {
  if (i > 2) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
  }
});

console.log(dp[N]);
