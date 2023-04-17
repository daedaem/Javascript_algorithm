const [T, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const answer = Array.from({ length: 41 }, () =>
  Array.from({ length: 2 }).fill(0)
);

answer[0][0] = 1;
answer[1][1] = 1;

for (let i = 2; i <= 40; i++) {
  answer[i][0] = answer[i - 2][0] + answer[i - 1][0];
  answer[i][1] = answer[i - 2][1] + answer[i - 1][1];
}
input.forEach((el) => {
  console.log(answer[el].join(" "));
});
