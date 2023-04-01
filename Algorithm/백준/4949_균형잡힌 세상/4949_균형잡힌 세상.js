const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

input.pop();
let answer = new Array(input.length);
input.map((el, idx) => {
  let stack = [];
  let flag = true;
  for (let i = 0; i < el.length; i++) {
    flag = true;
    if (el[i] == "(" || el[i] == "[") stack.push(el[i]);
    else if (el[i] == ")") {
      const end = stack[stack.length - 1];
      if (end == "(") stack.pop();
      else {
        answer[idx] = "no";
        flag = false;
        break;
      }
    } else if (el[i] == "]") {
      const end = stack[stack.length - 1];
      if (end == "[") stack.pop();
      else {
        answer[idx] = "no";
        flag = false;
        break;
      }
    } else continue;
  }
  if (!flag || stack.length > 0) answer[idx] = "no";
  else answer[idx] = "yes";
});
console.log(answer.join("\n"));
