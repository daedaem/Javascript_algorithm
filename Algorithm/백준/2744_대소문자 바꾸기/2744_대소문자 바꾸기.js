const input = require("fs")
  .readFileSync("./2744.txt")
  .toString()
  .trim()
  .split("")
  .map((el) => {
    if (el >= "a" && el <= "z") {
      el = el.toUpperCase();
      return el;
    } else {
      el = el.toLowerCase();
      return el;
    }
  })
  .join("");
// const input = require("fs").readFileSync("./dev/stdin").toString().trim();

console.log(input);
