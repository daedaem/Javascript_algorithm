function solution(s, skip, index) {
  const alphs = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .filter((el) => !skip.includes(el));
  return s
    .split("")
    .map((el) => {
      return alphs[(alphs.indexOf(el) + index) % alphs.length];
    })
    .join("");
}
