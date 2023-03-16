const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");
input.pop();
const answer = input.reduce((init, el) => {
  const [name, age, weight] = el.trim().split(" ");
  if (+age > 17 || +weight >= 80) {
    return [...init, name + " Senior"];
  } else {
    return [...init, name + " Junior"];
  }
}, []);
console.log(answer.join("\n"));
