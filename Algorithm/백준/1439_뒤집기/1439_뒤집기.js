const input = require("fs").readFileSync("./1439.txt").toString().trim();

const obj = { 0: 0, 1: 0 };
let letter = input[0];
let cnt = 0;
for (let i = 0; i < input.length; i++) {
  if (letter == input[i]) continue;
  else {
    obj[letter] += 1;
    letter = input[i];
  }
}
obj[letter] += 1;
console.log(Math.min(obj[0], obj[1]));
