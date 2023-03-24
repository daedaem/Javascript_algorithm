const [[A, K], arr] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => {
    return el.split(" ").map(Number);
  });

let start = 0;
let end = arr.length - 1;
let changes = 0;
let answer = [];
const partition = (arr, start, end) => {
  let cri = arr[end];
  let i = start - 1;
  //   console.log(arr, start, end);
  for (let j = start; j < end; j++) {
    if (arr[j] <= cri) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
      changes++;
      if (changes == K) answer.push(arr[i], arr[j]);
    }
  }
  //   console.log(arr, i);
  if (i + 1 != end) {
    [arr[i + 1], arr[end]] = [arr[end], arr[i + 1]];
    changes++;
    if (changes == K) answer.push(arr[i + 1], arr[end]);
  }
  return i + 1;
};

const quick_sort = (arr, start, end) => {
  if (start < end) {
    const pivot = partition(arr, start, end);
    // console.log("pivot : ", pivot);
    quick_sort(arr, start, pivot - 1);
    quick_sort(arr, pivot + 1, end);
  }
};
quick_sort(arr, start, end);
// console.log(arr);
if (answer.length > 1) {
  console.log(answer.join(" "));
} else console.log(-1);
