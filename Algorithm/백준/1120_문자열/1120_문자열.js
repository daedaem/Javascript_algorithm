const [A, B] = require("fs")
  .readFileSync("./1120.txt")
  .toString()
  .trim()
  .split(" ");
let maxValue = 51;
for (let i = 0; i <= B.length - A.length; i++) {
  let result = 0;
  for (let k = 0; k < A.length; k++) {
    if (A[k] !== B[i + k]) result++;
  }
  if (maxValue > result) maxValue = result;
}
console.log(maxValue);
// const alph = "abcdefghijklmnopqrstuvwxyz".split("");
// let answer = A;
// let maxx = 51;
// const DFS = (newA, Alen, size) => {
//   if (Alen >= size) {
//     const ret = checkSame(newA, B);
//     if (maxx > ret) {
//       maxx = ret;
//       answer = newA;
//     }
//     return;
//   }
//   for (let i = 0; i < alph.length; i++) {
//     DFS(newA + alph[i], Alen + 1, size);
//     DFS(alph[i] + newA, Alen + 1, size);
//   }
// };

// const checkSame = (A, B) => {
//   let cnt = 0;
//   for (let i = 0; i < A.length; i++) {
//     if (A[i] !== B[i]) cnt++;
//   }
//   return cnt;
// };
// const checkLenSame = (A, B) => {
//   if (A.length == B.length) {
//     let result = 0;
//     for (let i = 0; i < A.length; i++) {
//       if (A[i] !== B[i]) result++;
//     }
//     return result;
//   } else {
//     DFS(A, A.length, B.length);
//     return maxx;
//   }
// };

// console.log(checkLenSame(A, B));
