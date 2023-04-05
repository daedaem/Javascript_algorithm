const [[N, K], ...arr] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const comp = (a, b) => {
  if (a[1] === b[1]) {
    if (a[2] === b[2]) {
      return b[3] - a[3];
    } else return b[2] - a[2];
  } else return b[1] - a[1];
};
const result = arr.sort((a, b) => comp(a, b));
let idx = 1;
const rank = new Array(N + 1).fill(0);
let temp = [];

for (let i = 0; i < result.length; i++) {
  let flag = true;
  temp.push(result[i][0]);
  if (i === result.length - 1) {
    for (let k = 0; k < temp.length; k++) {
      rank[temp[k]] = idx;
    }
  } else {
    for (let j = 1; j <= 3; j++) {
      if (result[i][j] !== result[i + 1][j]) {
        flag = false;
        break;
      }
    }
    if (!flag) {
      for (let k = 0; k < temp.length; k++) {
        rank[temp[k]] = idx;
      }
      idx += temp.length;
      temp = [];
    }
  }
}
for (let k = 0; k < temp.length; k++) {
  rank[temp[k]] = idx;
}
console.log(rank[K]);
