const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const DFS = (node, dep) => {
  visit[node] = 1;
  //   console.log(node, " ");
  let cnt = 0;

  for (let i = 0; i < adjlist[node].length; i++) {
    const nextNode = adjlist[node][i];
    if (visit[nextNode]) continue;
    cnt += DFS(nextNode, dep + 1);
    console.log(node, cnt);
  }

  return cnt;
};

const N = +input.shift();
const adjlist = Array.from(Array(N + 1), () => new Array());
const visit = new Array(N + 1).fill(0);

const Trees = input
  .map((el) => {
    return el.trim().split(" ");
  })
  .map((number) => {
    let [n1, n2] = number;
    n1 = +n1;
    n2 = +n2;

    adjlist[n1].push(n2);
    adjlist[n2].push(n1);
  });
const answer = DFS(1, 0);
console.log(answer);
