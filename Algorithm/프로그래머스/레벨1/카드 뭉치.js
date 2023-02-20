const solve = (cards1, cards2, goal) => {
  let where = null;
  let flag1 = (flag2 = false);
  for (let i = 0; i < goal.length; i++) {
    const findWords = goal[i];
    if (cards1.length && cards1[0] == findWords) {
      flag1 = true;
      cards1.shift();
    } else if (cards2.length && cards2[0] == findWords) {
      flag2 = true;
      cards2.shift();
    } else {
      return 0;
    }
  }
  if (flag1 && flag2) return 1;
  return 0;
};

function solution(cards1, cards2, goal) {
  var answer = "";
  const ret = solve(cards1, cards2, goal);
  if (ret) answer = "Yes";
  else answer = "No";
  return answer;
}
