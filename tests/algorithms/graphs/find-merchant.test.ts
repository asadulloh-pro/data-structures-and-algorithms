import { findMerchant } from '@/algorithms/graphs/find-merchant';
import { FRIENDS } from '@/data/graphs/friends';

describe('findMerchant', () => {
  it('should return correct name when of merchant', () => {
    expect(findMerchant(FRIENDS, "thom")).toBe("thom");
  });

  it('should return null', () => {
    expect(findMerchant(FRIENDS, "asadulloh")).toBe(null);
  });
});
