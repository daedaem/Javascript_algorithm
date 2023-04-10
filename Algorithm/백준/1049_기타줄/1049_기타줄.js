const [[N, M], ...input] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

let package = 1000;
one = 1000;

for (let i = 0; i < M; i++) {
  if (input[i][0] < package) package = input[i][0];
  if (input[i][1] < one) one = input[i][1];
}

let moc = Math.floor(N / 6);
let nam = N - moc * 6;
if (package > one * 6) package = one * 6;
let answer;
if (package < nam * one) {
  answer = (moc + 1) * package;
} else {
  answer = moc * package + nam * one;
}
console.log(answer);
