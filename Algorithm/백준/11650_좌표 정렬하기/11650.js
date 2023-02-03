let input = require("fs")
  .readFileSync("./11650.txt")
  .toString()
  .trim()
  .split("\n");
//   .map((el) => el.trim());
input.shift();
// input = input.map((el) => el.split(" "));
// console.log(input);
// input.map((el) => Number);
input.sort((a, b) => {
  const AX = Number(a.split(" ")[0]);
  const AY = Number(a.split(" ")[1]);
  const BX = Number(b.split(" ")[0]);
  const BY = Number(b.split(" ")[1]);
  if (AX == BX) {
    if (AY < BY) return -1;
    else return 1;
  }
  if (AX < BX) return -1;
  else return 1;
});

console.log(input.join("\n"));
