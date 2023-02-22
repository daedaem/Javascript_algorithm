function solution(s) {
  let alph = new Map();
  return [...s].map((el, idx) => {
    const result = alph[el] == undefined ? -1 : idx - alph[el];
    alph[el] = idx;
    return result;
  });
}

// function solution(s) {
//   var answer = [];
//   let alph = new Map();
//   for (let idx = 0; idx < s.length; idx++) {
//     if (alph[s[idx]] == undefined) {
//       answer.push(-1);
//       alph[s[idx]] = idx;
//     } else {
//       answer.push(idx - alph[s[idx]]);
//       alph[s[idx]] = idx;
//     }
//   }
//   return answer;
// }
