const Input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");
const N = +Input.shift();
const numbers = Input.join("").split(" ").map(Number);

numbers.sort((a, b) => a - b);
if (numbers.length == 1) {
  console.log(numbers[0] * numbers[0]);
} else console.log(numbers.pop() * numbers.shift());
