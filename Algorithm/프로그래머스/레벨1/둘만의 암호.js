function solution(s, skip, index) {
  var answer = "";

  let alphs = "abcdefghijklmnopqrstuvwxyz";
  alphs = alphs.split("").filter((el) => {
    return skip.split("").indexOf(el) === -1;
  });

  const lens = alphs.length;

  answer = s
    .split("")
    .map((el) => {
      return alphs[(alphs.indexOf(el) + index) % lens];
    })
    .join("");

  return answer;
}
