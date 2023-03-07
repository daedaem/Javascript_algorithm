const input = +require("fs").readFileSync("./input.txt").toString().trim();
const count = { 2: 0, 5: 0 };
for (let i = 1; i <= input; i++) {
  if (!(i % 2) || !(i % 5)) {
    let num = i;
    while (1) {
      let flag = false;
      if (!(num % 2)) {
        num /= 2;
        count["2"]++;
        flag = true;
      }
      if (!(num % 5)) {
        num /= 5;
        count["5"]++;
        flag = true;
      }
      if (!flag) break;
    }
  }
}
console.log(Math.min(...Object.values(count)));
