const input = Number(
  require("fs").readFileSync("./2747.txt").toString().trim()
);

let arr = [0, 1];
for (let i = 0; arr.length <= input; i++) {
  let newNumber = arr[i] + arr[i + 1];
  arr.push(newNumber);
}

console.log(arr[arr.length - 1]);
