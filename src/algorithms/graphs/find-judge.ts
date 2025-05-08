// Leedcode link: https://leetcode.com/problems/find-the-town-judge

export function findJudge(n: number, trust: Array<Array<number>>): number {
  const counter = Object.fromEntries(
    Array.from({ length: n }, (_, i) => [i + 1, 0])
  );

  if (n === 1) return 1;
  if (!trust.length) return -1;

  for (let i = 0; i < trust.length; i++) {
    const a = trust[i][0];
    const b = trust[i][1];

    counter[a] -= 1;
    counter[b] += 1;
  }

  for (let item in counter) {
    const value = counter[item];
    if (value == n - 1) return +item;
  }

  return -1;
}
