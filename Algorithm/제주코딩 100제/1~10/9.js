// # 문제9 : concat을 활용한 출력 방법
// 다음 소스 코드를 완성하여 날짜와 시간을 출력하시오.
const year = "2019";
const month = "04";
const day = "26";
const hour = "11";
const minute = "34";
const second = "27";

const result = year.concat(
  "/",
  month,
  "/",
  day,
  " ",
  hour,
  ":",
  minute,
  ":",
  second
);
console.log(result); //빈칸을 채워주세요
// console.log(`${year}/${month}/${day} ${hour}:${minute}:${second}`);

// 출력
// 2019/04/26 11:34:27
