const [N, ...input] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => +el.trim());

// input.reverse();
const stack = [];
let result = "";
// let idx = 0;
let idx = 1;
for (let i = 0; i < N; i++) {
  while (idx <= input[i]) {
    stack.push(idx++);
    result += "+";
  }
  if (stack[stack.length - 1] > input[i]) {
    console.log("NO");
    return;
  }
  while (stack[stack.length - 1] >= input[i]) {
    stack.pop();
    result += "-";
  }
}
console.log(result.split("").join("\n"));
// console.log(input);
// console.log(stack);
// console.log(result);
// while()
// let idx = 1;
// while (input.length) {
//   //   const num = input.shift();
//   if (!stack.length) {
//     const num = input.shift();
//     stack.push(num);
//     result += "-";
//   } else if (stack[stack.length - 1] < input[0]) {
//     const num = input.shift();
//     stack.push(num);
//     result += "-";
//   } else if (stack[stack.length - 1] > input[0]) {
//     stack.pop();
//     result += "+";
//   }
//   //   stack.push(num);
//   //   console.log(result);
// }
// while (stack.length) {
//   stack.pop();
//   result += "+";
// }
// const re = result.split("").reverse().join("\n");
// console.log(re);
