let [A, B] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .split(" ")
  .map(Number);

if (A > B) [A, B] = [B, A];
// console.log(A, B);
console.log(B - A - 1 < 0 ? 0 : B - A - 1);
let result = [];
for (let i = A + 1; i < B; i++) {
  result.push(i);
}
result = result.join(" ");
console.log(result);
