// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// const [N, ...input] = require("fs")
//   .readFileSync(filePath)
//   .toString()
//   .split("\n")
//   .map(Number);

// const stack = [];
// const visit = Array.from({ length: N }, () => 0);

// let idx = 0;
// let answer = 0;
// while (idx < N) {
//   while (stack.length && stack[stack.length - 1] <= input[idx]) {
//     stack.pop();
//   }
//   stack.push(input[idx++]);

//   answer += stack.length - 1;
// }
// console.log(answer);

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [N, ...input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map(Number);

let answer = 0;

const st = [{ height: +input[N - 1], count: 0 }];

for (let i = N - 2; i >= 0; i--) {
  const curHeight = +input[i];
  let curCount = 0;
  while (st.length !== 0) {
    const { height, count } = st[0];
    if (curHeight > height) {
      curCount += count + 1;
      st.shift();
      answer += count;
    } else {
      break;
    }
  }
  st.unshift({ height: curHeight, count: curCount });
}
while (st.length !== 0) {
  const { count } = st.shift();
  answer += count;
}
console.log(answer);
