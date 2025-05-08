import { findMerchant } from '@/algorithms/graphs/find-merchant';
import { IFriends } from '@/types';

export const FRIENDS: IFriends = {};

FRIENDS['you'] = ['alice', 'bob', 'claire'];
FRIENDS['bob'] = ['anuj', 'peggy'];
FRIENDS['alice'] = ['peggy'];
FRIENDS['claire'] = ['thom', 'jonny'];
FRIENDS['anuj'] = [];
FRIENDS['peggy'] = [];
FRIENDS['thom'] = [];
FRIENDS['jonny'] = [];

describe('findMerchant', () => {
  it('should return the merchant name if found in the graph', () => {
    expect(findMerchant(FRIENDS, 'thom')).toBe('thom');
    expect(findMerchant(FRIENDS, 'jonny')).toBe('jonny');
    expect(findMerchant(FRIENDS, 'peggy')).toBe('peggy');
    expect(findMerchant(FRIENDS, 'anuj')).toBe('anuj');
  });

  it('should return null if the merchant is not in the graph', () => {
    expect(findMerchant(FRIENDS, 'asadulloh')).toBeNull();
    expect(findMerchant(FRIENDS, '')).toBeNull();
    expect(findMerchant(FRIENDS, 'random_person')).toBeNull();
  });

  it('should handle an empty graph safely', () => {
    const EMPTY_GRAPH = {};
    expect(findMerchant(EMPTY_GRAPH, 'anyone')).toBeNull();
  });

  it('should return null if start node has no connections', () => {
    const graph = {
      you: [],
    };
    expect(findMerchant(graph, 'thom')).toBeNull();
  });

  it('should not enter infinite loop on cyclic graphs', () => {
    const cyclicGraph = {
      you: ['alice'],
      alice: ['you'],
    };
    expect(findMerchant(cyclicGraph, 'alice')).toBe('alice');
  });
});
