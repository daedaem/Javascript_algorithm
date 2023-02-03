let input = require("fs")
  .readFileSync("./7789.txt")
  .toString()
  .trim()
  .split(" ");

const ordNumber = Number(input[0]);
const newNumber = Number(input[1] + input[0]);

let arr = [];
for (let n = 0; n <= newNumber; n++) {
  arr.push(0);
}
const makePrime = () => {
  const maxRange = Math.sqrt(newNumber);
  for (let i = 2; i <= maxRange; i++) {
    if (arr[i]) continue;
    for (let k = 2; k * i < newNumber + 1; k++) {
      if (arr[i * k]) continue;
      arr[i * k] = 1;
    }
  }
};
makePrime();

if (arr[ordNumber] || arr[newNumber]) console.log("No");
else console.log("Yes");
