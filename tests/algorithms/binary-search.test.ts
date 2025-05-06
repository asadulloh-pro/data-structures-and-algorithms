import { binarySearch } from '../../src/algorithms/binary-search';

describe('binarySearch', () => {
  it('should return correct index when target is present', () => {
    const arr = [1, 3, 5, 7, 9, 11];
    expect(binarySearch(arr, 7)).toBe(3);
    expect(binarySearch(arr, 1)).toBe(0);
    expect(binarySearch(arr, 11)).toBe(5);
  });

  it('should return -1 when target is not present', () => {
    const arr = [2, 4, 6, 8, 10];
    expect(binarySearch(arr, 5)).toBe(-1);
    expect(binarySearch(arr, 0)).toBe(-1);
    expect(binarySearch(arr, 12)).toBe(-1);
  });

  it('should handle empty array', () => {
    expect(binarySearch([], 1)).toBe(-1);
  });
});
