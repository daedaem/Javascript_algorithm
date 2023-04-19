const [N, input] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

// console.log(N, input);
const newArr = input
  .reduce((init, el, idx) => [...init, [idx, el]], [])
  .sort((a, b) => a[1] - b[1]);
const visit = Array.from({ length: N }).fill(0);
newArr.forEach((el, idx) => (visit[el[0]] = idx));
console.log(visit.join(" "));
