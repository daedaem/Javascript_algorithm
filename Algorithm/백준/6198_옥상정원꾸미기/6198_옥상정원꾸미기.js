const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [N, ...input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map(Number);

const stack = [];
const visit = Array.from({ length: N }, () => 0);

let idx = 0;
let answer = 0;
while (idx < N) {
  while (stack.length && stack[stack.length - 1] <= input[idx]) {
    stack.pop();
  }
  stack.push(input[idx++]);

  answer += stack.length - 1;
}
console.log(answer);
