function solution(t, p) {
  let answer = 0;
  // console.log(t, p)
  for (let i = 0; i < t.length - p.length + 1; i++) {
    let word = "";
    for (let k = 0; k < p.length; k++) {
      word += t[i + k];
    }
    if (Number(word) <= p) answer += 1;
  }
  return answer;
}

const t = ["3141592", "500220839878", "10203"];
const p = ["271", "7", "15"];
for (let tc = 0; tc < t.length; tc++) {
  console.log(solution(t[tc], p[tc]));
}
