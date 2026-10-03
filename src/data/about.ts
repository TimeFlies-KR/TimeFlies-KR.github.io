// 자기 소개(포트폴리오) 사이트의 내용. "(작성 필요)"는 실제 내용으로 바꾼다.

export const about = {
  name: '(이름)',
  handle: 'TimeFlies-KR',
  role: '게임 개발자',
  summary:
    '게임과 그 게임을 만드는 도구를 함께 만듭니다. 같은 게임을 라이브러리 기반 실행기, 자체 엔진, Unity로 각각 만들며 도구 제작과 게임 제작을 익히고 있습니다.',
  skills: [
    { group: '언어', items: ['C', 'C++', 'C#'] },
    { group: '엔진·라이브러리', items: ['Unity', 'MonoGame', 'SFML', 'raylib'] },
    { group: '도구', items: ['Git', 'GitHub', 'CMake'] },
  ],
  projects: [
    {
      title: '불타 버린 유언장',
      body: '10~15분 분량의 추리 어드벤처. 하나의 대본 파일을 세 가지 실행 방식이 함께 읽는다.',
      tags: ['C#', 'C++', 'C', 'Unity'],
      href: '/company/games/burned-will/',
    },
    {
      title: '자체 엔진과 에디터',
      body: 'C#으로 만든 2D 엔진과 Hierarchy·Scene·Inspector·Project 탭을 갖춘 범용 에디터.',
      tags: ['C#', 'SDL'],
    },
    {
      title: '전용 대본 편집기',
      body: '대화·조사·증거 제시 흐름을 편집하는 게임 전용 편집기(WinForms)와 Unity 안의 대화 그래프 편집 창.',
      tags: ['C#', 'Unity'],
    },
  ],
  timeline: [
    { when: '2026', what: '추리 게임 세 방식 제작 시작' },
    { when: '(작성 필요)', what: '(경력·교육·활동)' },
  ],
  contact: [
    { label: 'GitHub', value: 'TimeFlies-KR', href: 'https://github.com/TimeFlies-KR' },
    { label: '이메일', value: '(공개할 주소)' },
  ],
};
