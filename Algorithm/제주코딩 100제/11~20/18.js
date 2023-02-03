const input = prompt("세 과목의 점수를 입력하세요.").split(" ");
let sumScore = 0;

for (let i = 0; i < 3; i++) {
  sumScore += Number(input[i]);
}
console.log(Math.floor(sumScore / 3));
