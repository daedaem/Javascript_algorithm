const CHESS = [1, 1, 2, 2, 2, 8];
const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
const result = [];
for (let i = 0; i < 6; i++) {
  result.push(CHESS[i] - input[i]);
}
console.log(result.join(" "));
