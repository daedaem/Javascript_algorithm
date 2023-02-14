const input = require("fs").readFileSync("./1439.txt").toString().trim();

// const obj = { 0: 0, 1: 0 };
// let letter = input[0];
// let cnt = 0;
// for (let i = 0; i < input.length; i++) {
//   if (letter == input[i]) continue;
//   else {
//     obj[letter] += 1;
//     letter = input[i];
//   }
// }
// obj[letter] += 1;
// console.log(Math.min(obj[0], obj[1]));

function solution(input) {
  if (input.includes(0) && input.includes(1)) {
    const toOne = input.split(0).filter((el) => el !== "").length;
    const toZero = input.split(1).filter((el) => el !== "").length;

    return toOne < toZero ? toOne : toZero;
  } else return 0;
}
console.log(solution(input));
