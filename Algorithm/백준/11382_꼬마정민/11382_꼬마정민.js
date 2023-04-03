const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const result = input.reduce((init, val) => {
  return (init += val);
}, 0);

console.log(result);
