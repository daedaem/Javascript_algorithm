(function solve() {
  const [N, K] = require("fs")
    .readFileSync("dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);

  let length = 0;
  for (let i = 1; i <= N; i++) {
    length += i.toString().length;
    if (length >= K) {
      const numStr = i.toString();
      const idx = K - (length - numStr.length);
      console.log(numStr[idx - 1]);
      break;
    }
  }

  if (length < K) {
    console.log("-1");
  }
})();
