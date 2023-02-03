const input = Number(
  require("fs").readFileSync("./24416.txt").toString().trim()
);
let cnt1 = 0;
let cnt2 = 0;
const fib = (n, cnt) => {
  if (n == 1 || n == 2) {
    cnt1++;
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
};

const fibonacci = (n, cnt) => {
  arr[1] = arr[2] = 1;
  for (let i = 3; i <= n; i++) {
    cnt2++;
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
};

let arr = [];
for (let i = 0; i <= input; i++) {
  arr.push(0);
}

fib(input, 0);
fibonacci(input, 0);
console.log(cnt1, cnt2);
