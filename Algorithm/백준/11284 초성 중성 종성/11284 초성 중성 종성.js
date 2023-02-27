const cho = [
  "ㄱ",
  "ㄲ",
  "ㄴ",
  "ㄷ",
  "ㄸ",
  "ㄹ",
  "ㅁ",
  "ㅂ",
  "ㅃ",
  "ㅅ",
  "ㅆ",
  "ㅇ",
  "ㅈ",
  "ㅉ",
  "ㅊ",
  "ㅋ",
  "ㅌ",
  "ㅍ",
  "ㅎ",
];
const joongsung = [
  "ㅏ",
  "ㅐ",
  "ㅑ",
  "ㅒ",
  "ㅓ",
  "ㅔ",
  "ㅕ",
  "ㅖ",
  "ㅗ",
  "ㅘ",
  "ㅙ",
  "ㅚ",
  "ㅛ",
  "ㅜ",
  "ㅝ",
  "ㅞ",
  "ㅟ",
  "ㅠ",
  "ㅡ",
  "ㅢ",
  "ㅣ",
];
const jongsung = [
  " ",
  "ㄱ",
  "ㄲ",
  "ㄳ",
  "ㄴ",
  "ㄵ",
  "ㄶ",
  "ㄷ",
  "ㄹ",
  "ㄺ",
  "ㄻ",
  "ㄼ",
  "ㄽ",
  "ㄾ",
  "ㄿ",
  "ㅀ",
  "ㅁ",
  "ㅂ",
  "ㅄ",
  "ㅅ",
  "ㅆ",
  "ㅇ",
  "ㅈ",
  "ㅊ",
  "ㅋ",
  "ㅌ",
  "ㅍ",
  "ㅎ",
];
const INPUT = require("fs").readFileSync("./input.txt").toString();
const inputCodeNumber = INPUT.codePointAt() - "가".codePointAt();
console.log(
  cho[Math.floor(inputCodeNumber / (joongsung.length * jongsung.length))]
);
console.log(
  joongsung[Math.floor((inputCodeNumber / jongsung.length) % joongsung.length)]
);
console.log(jongsung[Math.floor(inputCodeNumber % jongsung.length)]);
// console.log(
//   cho[Math.floor(inputCodeNumber / (joongsung.length * jongsung.length))]
// );
// );
// cho.map((el) => console.log(el.codePointAt()));
// console.log("======");
// joongsung.map((el) => console.log(el.codePointAt()));
// console.log("======");
// console.log(
//   "ㄱ".codePointAt(),
//   "ㅏ".codePointAt(),
//   "ㄱ".codePointAt(),
//   "가".codePointAt(),
//   "각".codePointAt()
// );
// jongsung.map((el) => console.log(el.codePointAt()));

// console.log(cho[cho.length - 1] ?? "오류");
// const joong;

// const jongsung;
// for (let letter of cho) {
//   console.log(letter);
// }
// console.log(String.fromCharCode(66));
// console.log(String.fromCharCode(55100));
// console.log("ㄱ".codePointAt());
// console.log("힣".codePointAt());
