const [[N], ...arr] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .split("\n")
  .map((el) => {
    return el.split(" ").map((item) => Number(item.trim()));
  });

const dp = Array.from(new Array(N + 1), () => new Array(3).fill(0));

for (let i = 0; i < 3; i++) {
  dp[0][i] = arr[0][i];
}
for (let i = 1; i < N; i++) {
  for (let j = 0; j < 3; j++) {
    switch (j) {
      case 0:
        dp[i][j] = Math.min(dp[i - 1][1] + arr[i][j], dp[i - 1][2] + arr[i][j]);
        break;
      case 1:
        dp[i][j] = Math.min(dp[i - 1][0] + arr[i][j], dp[i - 1][2] + arr[i][j]);
        break;
      case 2:
        dp[i][j] = Math.min(dp[i - 1][0] + arr[i][j], dp[i - 1][1] + arr[i][j]);
        break;
    }
  }
}

console.log(Math.min(...dp[N - 1]));
