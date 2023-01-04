const N = prompt("숫자를 입력해주세요.");
// const N = 5;

let tree = "";

for (let r = N - 1; r >= 0; r--) {
  for (let c = 0; c <= 2 * (N - 1) - r; c++) {
    if (c >= r && c <= 0 + 2 * (N - 1) - r) {
      tree += "*";
    } else tree += " ";
  }
  tree += "\n";
}

// for (let i = 1; i <= n; i++) {
//   let star = "";
//   for (let j = 1; j <= n - i; j++) {
//     star += " ";
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     star += "*";
//   }
//   tree += star + "\n";
// }
console.log(tree);
