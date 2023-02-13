let [N, input] = require("fs")
  .readFileSync("./18870.txt")
  .toString()
  .trim()
  .split("\n");
input = input.split(" ").map(Number);
let newarr = [...input];
input = [...new Set(input)];
input.sort((a, b) => a - b);

let hashmap = new Map();
input.forEach((val, idx) => (hashmap[val] = idx));
let result = [];
for (let i = 0; i < newarr.length; i++) {
  result.push(hashmap[newarr[i]]);
}
console.log(result.join(" "));
