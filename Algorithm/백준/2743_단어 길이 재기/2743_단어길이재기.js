// const input = require("fs").readFileSync("/dev/stdin").toString();
const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim().length;
console.log(input);
