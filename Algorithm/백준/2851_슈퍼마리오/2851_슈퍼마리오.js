const input = require("fs")
  .readFileSync("./2851.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => Number(el.trim()));
let sum = 0;
let diff = 100;
let maxvalue = 0;
for (let i = 0; i < input.length; i++) {
  sum += input[i];
  if (Math.abs(sum - 100) <= diff) {
    diff = Math.abs(sum - 100);
    maxvalue = sum;
  }
}
console.log(maxvalue);
