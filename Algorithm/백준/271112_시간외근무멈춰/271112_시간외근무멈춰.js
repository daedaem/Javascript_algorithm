const IN = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");
const N = +IN.shift();
// console.log(IN);

const sche = IN.map((el) => {
  return el.trim().split(" ").map(Number);
}).sort((a, b) => a[0] - b[0]);
const maxDay = sche[sche.length - 1][0];
const visit = new Array(maxDay + 1)
  .fill(0)
  .map((el, idx) => ((idx + 1) % 6 == 0 || (idx + 1) % 7 == 0 ? 1 : 0));
visit[0] = 0;

const solve = () => {
  let day = 0;
  let addDay = 0;
  for (let i = 0; i < sche.length; i++) {
    let [di, ti] = sche[i];
    console.log(di, ti, day, addDay);
    while (ti) {
      if (visit[day++]) continue;
      ti--;
      day++;
    }
    if (day >= di) {
      addDay += day - di;
      addDay += ti;
      if (addDay > di) {
        addDay = -1;
        return -1;
      }
      break;
    } else {
      visit[day]++;
    }
  }
  return addDay;
};

const answer = solve();
console.log(answer);
// day = day;
//   if (di < day) {
//     addDay += day - di;
//     day = di;
//   }
//   if (addDay > di) {
//     answer = -1;
//     break;
//   }
// const maps = new Map();
// const sche = IN.map((el) => {
//   return el
//     .trim()
//     .split(" ")
//     .map((val, idx) => {
//       if (idx == 0) {
//         if (+val % 6 === 0) {
//           return +val - 1;
//         }
//         if (+val % 7 === 0) {
//           return +val - 2;
//         } else return +val;
//       } else {
//         return +val;
//       }
//     });
// }).map((el) => {
//   let [di, ti] = el;
//   di = +di - Math.floor(+di / 7) * 2;
//   const res = maps.get(di);
//   if (res === undefined) {
//     maps.set(di, ti);
//   } else maps.set(di, res + ti);
// });
// //   .map((val, idx) => {
// //   if (idx == 0) {
// //     return;
// //   } else return +val;
// // });
// // .map((el) => {
// //   let [di, ti] = el;
// //   di = +di - Math.floor(+di / 7) * 2;
// //   if (maps[di] == undefined) {
// //     maps[di] = +ti;
// //   } else maps[di] += ti;
// // });

// // console.log(maps);
// let day = 0;
// let addDay = 0;
// let answer = [...maps].sort((a, b) => a[0] - b[0]);
// for (let i = 0; i < answer.length; i++) {
//   const [di, ti] = answer[i];
//   day += ti;
//   if (di < day) {
//     addDay += day - di;
//     day = di;
//   }
//   if (addDay > di) {
//     answer = -1;
//     break;
//   }
// }
// answer = answer === -1 ? -1 : addDay;
// console.log(answer);
// // console.log(newarr);
// // sche.forEach((val, key) => console.log(val, key));

// // console.log(SCH);
// // console.log(maps);
// // sche.sort((a, b) => a[0] - b[0]);

// // console.log(sche);
