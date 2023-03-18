const [N, ...INPUT] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

const nextPermutation = (el) => {
  let word = el.split("");

  let i = word.length - 1;
  let j = word.length - 1;

  // 뒤에서부터 오름차순이 끊기는 인덱스 찾기
  while (i > 0 && word[i - 1] >= word[i]) i--;

  //이미 뒤에서부터 오름차순이 끝까지 되므로 제일 뒤 문자이므로 리턴
  if (!i) return el;

  // 뒤에서부터 바꿔야할 인덱스(i-1) 값보다 큰 값 인덱스 j 찾기
  while (word[i - 1] >= word[j]) j--;

  // 스왑하고
  [word[j], word[i - 1]] = [word[i - 1], word[j]];

  //그 뒤는 어차피 오름차순이면 바로 그담 순서
  let front = word.slice(0, i).join("");
  let rear = word
    .slice(i)
    .sort((a, b) => a.charCodeAt() - b.charCodeAt())
    .join("");
  word = front + rear;

  return word;
};

INPUT.map((el) => {
  console.log(nextPermutation(el));
});
// const comp = (a, b) => {
//   if (a > b) return -1;
//   else return 1;
// };
// const solve = (front, rear, el) => {
//   const newRear = rear.split("").sort(comp).join("");
//   const newWord = front + newRear;
//   if (newWord > el) {
//     return 1;
//   } else return 0;
// };

// let visit;
// let wordList = [];
// let result = [];
// const findNewWord = (front, dep, word, origin) => {
//   if (dep == wordList.length) {
//     const newWord = front + word;
//     if (origin < newWord) {
//       if (result.length && result[0] > newWord) {
//         result[0] = newWord;
//       } else if (!result.length) {
//         result.push(newWord);
//       }
//     }
//     return;
//   }
//   for (let i = 0; i < wordList.length; i++) {
//     if (visit[i]) continue;
//     visit[i] = 1;
//     findNewWord(front, dep + 1, word + wordList[i], origin);
//     visit[i] = 0;
//   }
// };
// INPUT.map((el) => {
//   result = [];
//   if (
//     el
//       .split("")
//       .sort((a, b) => b.charCodeAt() - a.charCodeAt())
//       .join("") !== el
//   ) {
//     for (let i = 1; i <= el.length; i++) {
//       const front = el.slice(0, el.length - i);
//       const rear = el.slice(el.length - i);
//       const res = solve(front, rear, el);
//       if (res) {
//         wordList = [...rear.split("").sort()];
//         visit = Array(wordList.length + 1).fill(0);
//         findNewWord(front, 0, "", el);
//       }
//     }
//   }
//   console.log(result.length ? result[0] : el);
// });
