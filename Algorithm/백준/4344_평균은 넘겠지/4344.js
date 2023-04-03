const [[C], ...input] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

const result = input.map((el) => {
  el.shift();
  const avg =
    el.reduce((init, val, idx) => {
      return (init += val);
    }, 0) / el.length;

  return (
    ((el.filter((el) => el > avg).length / el.length) * 100).toFixed(3) + "%"
  );
});

console.log(result.join("\n"));
