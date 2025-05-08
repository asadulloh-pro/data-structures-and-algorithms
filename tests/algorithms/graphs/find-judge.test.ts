import { findJudge } from '@/algorithms/graphs/find-judge';

describe('findJudge', () => {
  it('should return the judge if they exist', () => {
    expect(findJudge(2, [[1, 2]])).toBe(2);
    expect(
      findJudge(3, [
        [1, 3],
        [2, 3],
      ])
    ).toBe(3);
    expect(
      findJudge(4, [
        [1, 4],
        [2, 4],
        [3, 4],
      ])
    ).toBe(4);
  });

  it('should return -1 if no judge exists due to mutual trust', () => {
    expect(
      findJudge(3, [
        [1, 3],
        [2, 3],
        [3, 1],
      ])
    ).toBe(-1);
    expect(
      findJudge(3, [
        [1, 2],
        [2, 3],
      ])
    ).toBe(-1);
  });

  it('should return -1 if trust array is empty and n > 1', () => {
    expect(findJudge(3, [])).toBe(-1);
  });

  it('should return 1 if there is only one person and no trust', () => {
    expect(findJudge(1, [])).toBe(1);
  });

  it('should return -1 if everyone trusts someone', () => {
    expect(
      findJudge(3, [
        [1, 2],
        [2, 1],
        [3, 1],
      ])
    ).toBe(-1);
  });

  it('should handle large input efficiently', () => {
    const n = 1000;
    const trust: number[][] = Array.from({ length: n - 1 }, (_, i) => [
      i + 1,
      n,
    ]);
    expect(findJudge(n, trust)).toBe(n);
  });

  it('should return -1 when the judge trusts someone', () => {
    expect(
      findJudge(3, [
        [1, 3],
        [2, 3],
        [3, 1],
      ])
    ).toBe(-1);
  });
});
