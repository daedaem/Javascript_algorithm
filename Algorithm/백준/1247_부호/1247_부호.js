const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .split("\n")
  .map((el) => BigInt(el.trim()));

let idx = 0;
for (let i = 0; i < 3; i++) {
  const N = parseInt(input[idx]);
  const newarr = input.slice(++idx, idx + N);
  const result = newarr.reduce((init, val) => (init += val), BigInt(0));
  idx += N;
  //   console.log(newarr);
  if (!result) {
    console.log(0);
  } else if (result < 0) console.log("-");
  else console.log("+");
}
