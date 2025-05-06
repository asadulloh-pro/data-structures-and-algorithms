import { IFriends } from '@/data/graphs/types';

export const findMerchant = (graph: IFriends, merchant: string) => {
  if(Object.keys(graph).length === 0) return null;
  let search_queue = [...graph['you']];
  const searched = new Set();

  while (search_queue.length > 0) {
    const person = search_queue.shift();
    if (!person || searched.has(person)) continue;
    else if (person === merchant) {
      search_queue = [];
      return person;
    } else {
      searched.add(person);
      search_queue.push(...(graph[person] || []));
    }
  }

  return null;
};
