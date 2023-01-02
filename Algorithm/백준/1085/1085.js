const FS = require("fs");
//로컬용
let input = FS.readFileSync("./1085.txt").toString().trim().split(" ");
//백준용
//let input = FS.readFileSync("/dev/stdin").toString().trim().split(" ");

const X = parseInt(input[0]);
const Y = parseInt(input[1]);
const W = parseInt(input[2]);
const H = parseInt(input[3]);

const toBorderX = W - X;
const toBorderY = H - Y;

const array = [X, Y, toBorderX, toBorderY];
// let result = Math.min.apply(null, array);
let result = Math.min(...array);
console.log(result);
