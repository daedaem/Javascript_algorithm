const FS = require("fs");

//while (1) {
let input = FS.readFileSync("./4153.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

for (let sides of input) {
  sides.sort((a, b) => a - b);
  [X, Y, Z] = [...sides];
  if (!X && !Y && !Z) {
    break;
  } else if (Z ** 2 == X ** 2 + Y ** 2) {
    console.log("right");
  } else console.log("wrong");
}
//if (!s1 && !s2 && s3) break;
//   console.log(s1, s2, s3);
//}
