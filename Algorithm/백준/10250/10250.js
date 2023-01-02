const FS = require("fs");
const input = FS.readFileSync("./10250.txt")
  //const input = FS.readFileSync("/dev/stdin")

  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

for (let tc = 1; tc < input.length; tc++) {
  const [H, W, N] = [...input[tc]];
  let floor = N % H;
  if (!floor) {
    floor = H;
    hosu = Math.floor(N / H);
  } else {
    hosu = Math.floor(N / H) + 1;
  }
  if (hosu < 10) {
    hosu = "0" + hosu;
  }

  console.log(`${floor}${hosu}`);
}
