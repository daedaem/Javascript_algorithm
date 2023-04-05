let [[H, M], [C]] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

let time = +H * 60 + +M + +C;
M = time % 60;
H = Math.floor(time / 60) % 24;

console.log(H, M);
