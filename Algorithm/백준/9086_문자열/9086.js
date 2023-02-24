let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");
input.shift();
input = input.map((el) => {
  el = el.trim();
  const word = el[0] + el[el.length - 1];
  console.log(word);
});

//   .map();
// const Input=require('fs').readFileSync('/dev/stdin').toString().trim().
// console.log(input);
