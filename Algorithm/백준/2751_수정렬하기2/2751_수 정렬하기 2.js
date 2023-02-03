const input = require("fs")
  //   .readFileSync("./2751.txt")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => Number(el));

const ns = input.shift();
input.sort((a, b) => a - b);
console.log(input.join("\n"));
