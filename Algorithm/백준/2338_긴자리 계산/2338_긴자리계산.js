const [a, b] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(BigInt);
const answer = a + b + "\n" + (a - b) + "\n" + a * b;
console.log(answer);
