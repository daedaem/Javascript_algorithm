const input = require("fs")
  .readFileSync("./2609.txt")
  //   .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let [n1, n2] = input;
let bn = Math.max(n1, n2);
let sn = Math.min(n1, n2);
n1 = bn;
n2 = sn;

while (true) {
  let moc = parseInt(bn / sn);
  let nam = bn % sn;
  if (!nam) {
    const GCD = sn;
    const LCM = parseInt(n1 * n2) / GCD;
    console.log(GCD, LCM);
    break;
  }
  bn = sn;
  sn = nam;
}
