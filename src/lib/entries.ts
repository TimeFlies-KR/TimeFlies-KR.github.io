import { getCollection } from 'astro:content';

// 초안(draft: true)은 빼고 최신 글이 먼저 오도록 정렬한다.
export async function getEntries(collection: 'blog' | 'games') {
  const entries = await getCollection(collection, ({ data }) => !data.draft);
  return entries.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
