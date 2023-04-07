const [[N], ...input] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

for (let r = 1; r < N; r++) {
  for (let c = 0; c <= r; c++) {
    const left = c - 1 < 0 ? 0 : input[r - 1][c - 1];
    const right = c == r ? input[r - 1][r - 1] : input[r - 1][c];
    input[r][c] = Math.max(left + input[r][c], right + input[r][c]);
  }
}
console.log(Math.max(...input[N - 1]));
