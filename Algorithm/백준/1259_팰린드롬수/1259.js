const FS = require("fs");
// const input = FS.readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n")
//   .map((el) => el.split(" ").map(Number));
const input = FS.readFileSync("./1259.txt").toString().trim().split("\n");
input.pop();
for (let i = 0; i < input.length; i++) {
  //if (input[i] == "0") break;
  let word = input[i].trim();
  let number = word.split("").join("");
  let reversedNumber = word.split("").reverse().join("");
  if (number == reversedNumber) console.log("yes");
  else console.log("no");
}
