let totalIdx = 0;
const IN = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");
const T = +IN[totalIdx++];

const COMP = (a, b) => {
  if (+a[0] < +b[0]) return -1;
  return 1;
};
const solve = () => {
  let answer = 1;
  let N = +IN[totalIdx++];
  const arr = IN.slice(totalIdx, totalIdx + N).map((el) => {
    return el.trim().split(" ");
  });
  arr.sort(COMP);
  let tempIdx = 0;
  let maxNumber = +arr[tempIdx][1];
  while (N--) {
    if (maxNumber > +arr[tempIdx][1]) {
      maxNumber = +arr[tempIdx][1];
      ++answer;
    }
    tempIdx++;
    totalIdx++;
  }
  console.log(answer);
};
for (let i = 0; i < T; i++) {
  solve();
}
