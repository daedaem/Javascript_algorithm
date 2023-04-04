let [[H, M], [C]] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

let time = +H * 60 + +M + +C;
M = time % 60;
H = Math.floor(time / 60) % 24;
// console.log(H, M, C);
// console.log(time);
// H = (H + C / 60) % 24;
// M = M + (C % 60);
// if (M / 60 >= 1) {
//   H += Math.floor(M / 60);
//   M %= 60;
// }
console.log(H, M);
