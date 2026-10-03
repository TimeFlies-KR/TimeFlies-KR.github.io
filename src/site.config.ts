// 사이트 전체 설정. 메뉴에 보일 섹션은 여기서 켜고 끈다.
// kind: 'page'       → src/content/pages/<id>.md 한 장을 보여 준다.
// kind: 'collection' → src/content/<collection>/ 의 글 목록과 각 글 페이지를 만든다.

export type Section =
  | { id: string; label: string; summary: string; enabled: boolean; kind: 'page' }
  | {
      id: string;
      label: string;
      summary: string;
      enabled: boolean;
      kind: 'collection';
      collection: 'blog' | 'games';
    };

export const site = {
  title: 'TimeFlies',
  tagline: '게임을 만들고, 만드는 과정을 기록합니다.',
  description: 'TimeFlies의 게임, 회사, 개발 기록을 한곳에 모은 사이트',
  author: 'TimeFlies-KR',
  github: 'https://github.com/TimeFlies-KR',
};

export const sections: Section[] = [
  {
    id: 'games',
    label: '게임',
    summary: '만들고 있는 게임과 진행 상황',
    enabled: true,
    kind: 'collection',
    collection: 'games',
  },
  {
    id: 'blog',
    label: '개발 블로그',
    summary: '제작하면서 배운 것과 작업 일지',
    enabled: true,
    kind: 'collection',
    collection: 'blog',
  },
  {
    id: 'about',
    label: '자기 소개',
    summary: '만드는 사람과 다룰 수 있는 도구',
    enabled: true,
    kind: 'page',
  },
  {
    id: 'company',
    label: '회사 소개',
    summary: '팀이 하는 일과 연락처',
    enabled: true,
    kind: 'page',
  },
];

export const enabledSections = sections.filter((s) => s.enabled);

export function url(path = '') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('ko-KR', { dateStyle: 'medium' }).format(date);
}
