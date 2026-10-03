# TimeFlies 사이트

게임 소개 · 개발 블로그 · 자기 소개 · 회사 소개를 한곳에 모은 정적 사이트. [Astro](https://astro.build)로 만들고 GitHub Pages로 배포한다.

## 실행

Node.js 22.12 이상이 필요하다.

```bash
npm install
npm run dev      # http://localhost:4321 미리 보기 (저장하면 바로 반영)
npm run build    # dist/ 에 배포용 파일 생성
```

## 자주 하는 일

| 하고 싶은 것 | 방법 |
|---|---|
| 블로그 글 쓰기 | `src/content/blog/` 에 `.md` 파일 추가 (예시 파일의 머리말 형식 참고). `draft: true` 이면 숨김 |
| 게임 추가 | `src/content/games/` 에 `.md` 파일 추가 |
| 자기 소개·회사 소개 수정 | `src/content/pages/about.md`, `company.md` |
| 메뉴에서 섹션 끄기/켜기 | `src/site.config.ts` 의 `enabled` |
| 새 섹션 추가 | `src/site.config.ts` 의 `sections` 에 항목 추가. `kind: 'page'` 면 `src/content/pages/<id>.md` 를 만든다 |
| 사이트 이름·소개 문구 | `src/site.config.ts` 의 `site` |
| 색 바꾸기 | `src/styles/global.css` 맨 위 `:root` 토큰 (라이트/다크 각각) |

꺼진 섹션은 메뉴에서 빠질 뿐 아니라 페이지 자체가 만들어지지 않는다.

## 구조

```
src/
  site.config.ts          사이트 정보와 섹션 목록
  content.config.ts       글 종류(pages·blog·games)와 머리말 형식
  content/                실제 글 (마크다운)
  layouts/Base.astro      머리글·메뉴·바닥글 공통 틀
  pages/index.astro       첫 화면 (섹션 카드 + 최근 글)
  pages/[section]/        섹션 페이지와 글 페이지 (설정에서 자동 생성)
  styles/global.css       색·글꼴·레이아웃
.github/workflows/deploy.yml   main 푸시 시 자동 배포
```

## 배포

1. 이 폴더를 GitHub 저장소의 `main` 브랜치에 푸시한다.
2. 저장소 **Settings → Pages → Build and deployment → Source** 를 **GitHub Actions** 로 바꾼다.
3. 이후 `main` 에 푸시할 때마다 자동으로 빌드·배포된다.

저장소 이름이 `<계정>.github.io` 가 아니면 `astro.config.mjs` 에 `base: '/<저장소 이름>'` 을 추가한다.

## 왜 Astro인가

| 후보 | 장점 | 이 사이트에서의 단점 |
|---|---|---|
| **Astro (선택)** | 마크다운 글 관리, 공통 틀, 설정 기반 메뉴. 결과물은 순수 HTML이라 빠르다. 이 PC에 Node가 이미 있어 바로 미리 보기 가능 | 빌드 단계가 있어 GitHub Actions 설정이 필요(이미 포함) |
| Jekyll | GitHub Pages가 직접 빌드해 줘서 설정이 가장 적다 | 미리 보기에 Ruby 설치가 필요(이 PC에 없음). 허용 플러그인 제한 |
| 순수 HTML/JS | 도구가 전혀 필요 없다 | 글마다 HTML을 직접 만들거나 목록을 손으로 관리해야 해서 블로그가 커질수록 불편 |

## 의존성

| 패키지 | 버전 | 목적 | 라이선스 |
|---|---|---|---|
| astro | 7.3.5 | 정적 사이트 생성 | MIT |

`npm audit` 이 `http-cache-semantics` 취약점(GHSA-ch52-4w7c-c8xp)을 보고한다. Astro 내부의 개발·빌드용 캐시에서만 쓰이고 배포되는 HTML에는 포함되지 않는다. `npm audit fix --force` 는 Astro 2로 내려가므로 실행하지 않는다. Astro 업데이트 때 다시 확인한다.
