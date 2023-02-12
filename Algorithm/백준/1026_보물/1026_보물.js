const input = require("fs")
  .readFileSync("./1026.txt")
  .toString()
  .trim()
  .split("\n");

const N = input.shift();

const newarr = input.map((el) => el.split(" ").map(Number));

newarr[0].sort((a, b) => a - b);
newarr[1].sort((a, b) => b - a);

let result = 0;
for (let i = 0; i < N; i++) {
  result += newarr[0][i] * newarr[1][i];
}
console.log(result);
