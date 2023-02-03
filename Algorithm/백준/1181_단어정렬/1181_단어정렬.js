let input = require("fs")
  .readFileSync("./1181.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());
input.shift();
input = [...new Set(input)];
input.sort((a, b) => {
  if (a.length < b.length) return -1;
  if (a.length > b.length) return 1;
  if (a > b) return 1;
  if (a < b) return -1;
});
input = input.join("\n");
console.log(input);
