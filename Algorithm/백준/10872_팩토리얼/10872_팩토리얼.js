const input = Number(require("fs").readFileSync("./input.txt").toString());
// const input = Number(require("fs").readFileSync("/dev/stdin").toString());

let result = 1;
for (let i = 1; i <= input; i++) {
  result *= i;
}
console.log(result);
