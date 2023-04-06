const [[H, W, X, Y], ...input] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .split("\n")
  .map((el) => el.split(" ").map(Number));
const newArray = JSON.parse(JSON.stringify(input));
for (let r = 0; r < newArray.length; r++) {
  for (let c = 0; c < newArray[r].length; c++) {
    if (r - X < 0 || c - Y < 0) continue;
    newArray[r][c] -= newArray[r - X][c - Y];
  }
}
let result = [];
for (let r = 0; r < H; r++) {
  let temp = [];
  for (let c = 0; c < W; c++) {
    temp.push(newArray[r][c]);
  }
  result.push(temp.join(" "));
}
result = result.join("\n");
console.log(result);
