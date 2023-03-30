const [[N], ...arr] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .split("\n")
  .map((el) => el.split(" ").map((el) => Number(el.trim())));

let min = 0xf7777777;

let visit = new Array(N).fill(0);
const dfs = (node, start, sums, left, idx) => {
  if (sums > min) return;
  if (!left) {
    if (arr[node][start] === 0) return;

    if (min > sums + arr[node][start]) {
      min = sums + arr[node][start];
    }
    return;
  }
  for (let i = 0; i < N; i++) {
    if (visit[i]) continue;
    if (i === node) continue;
    if (arr[node][i] === 0) continue;
    visit[i] = idx + 1;
    dfs(i, start, sums + arr[node][i], left - 1, idx + 1);
    visit[i] = 0;
  }
};
for (let i = 0; i < N; i++) {
  visit = new Array(N).fill(0);
  visit[i] = 1;
  dfs(i, i, 0, N - 1, 1);
}

console.log(min);
