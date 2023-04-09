const [[N, M], input] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const moveLeft = (el, arr) => {
  const newArr = JSON.parse(JSON.stringify(arr));
  let cnt = 0;
  while (newArr.length > 0) {
    const top = newArr[0];
    if (top === el) {
      newArr.shift();
      return [newArr, cnt];
    } else {
      newArr.shift();
      newArr.push(top);
      cnt++;
    }
  }
};
const moveRight = (el, arr) => {
  let cnt = 0;
  const newArr = JSON.parse(JSON.stringify(arr));
  while (newArr.length > 0) {
    const top = newArr[0];
    if (top === el) {
      newArr.shift();
      return [newArr, cnt];
    } else {
      const rear = newArr.pop();
      newArr.unshift(rear);
      cnt++;
    }
  }
};
const find = (el, arr) => {
  const [leftarr, leftValue] = moveLeft(el, arr);
  const [rightarr, rightValue] = moveRight(el, arr);

  return leftValue < rightValue ? [leftarr, leftValue] : [rightarr, rightValue];
};
const solve = (arr) => {
  let newArr = JSON.parse(JSON.stringify(arr));
  const result = input.reduce((init, el) => {
    const [resArr, value] = find(el, newArr);
    newArr = resArr;
    return (init += value);
  }, 0);

  console.log(result);
};

const arr = Array.from({ length: N }, (w, idx) => idx + 1);
let cnt = 0;
solve(arr);
