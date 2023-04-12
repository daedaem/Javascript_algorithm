const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [[N], input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

let temp = 0;
let maxx = input[0];
for (let i = 0; i < N; i++) {
  if (temp < 0) {
    temp = input[i];
  } else {
    temp += input[i];
  }
  if (temp > maxx) {
    maxx = temp;
  }
}
console.log(maxx);
