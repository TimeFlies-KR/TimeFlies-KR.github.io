# TimeFlies 사이트

https://timeflies-kr.github.io

세 개의 독립 사이트와 그 사이를 잇는 합본 첫 화면으로 이루어진 정적 사이트. [Astro](https://astro.build)로 만들고 GitHub Pages로 배포한다.

| 주소 | 사이트 | 성격 |
|---|---|---|
| `/` | 합본 | 세 사이트로 **이동만** 한다. 다른 내용은 두지 않는다 |
| `/company/` | 회사 소개 | 회사 첫 화면(소개·원칙·게임·연락처) + 게임 목록·게임 상세 |
| `/blog/` | 개발 블로그 | 글 목록(연도별) · 글 · 태그 |
| `/about/` | 자기 소개 | 한 장짜리 포트폴리오(기술·프로젝트·이력·연락처) |

세 사이트는 각자 자기 머리글·메뉴·강조색을 가진 "메인"이다. 서로의 메뉴에 섞이지 않고, 바닥글의 "TimeFlies 전체 보기"로만 합본에 돌아간다.

## 실행

Node.js 22.12 이상이 필요하다.

```bash
npm install
npm run dev      # http://localhost:4321 미리 보기 (저장하면 바로 반영)
npm run build    # dist/ 에 배포용 파일 생성
```

## 자주 하는 일

| 하고 싶은 것 | 고칠 곳 |
|---|---|
| 블로그 글 쓰기 | `src/content/blog/` 에 `.md` 추가 (예시 파일의 머리말 형식 참고). `draft: true` 이면 숨김 |
| 블로그 이름·소개 | `src/data/blog.ts` |
| 게임 추가 | `src/content/games/` 에 `.md` 추가 → 회사 사이트에 자동으로 나온다 |
| 회사 소개 문구·연락처 | `src/data/company.ts` |
| 자기 소개(기술·프로젝트·이력·연락처) | `src/data/about.ts` |
| 합본 첫 화면의 이동 버튼 | `src/pages/index.astro` 의 `sites` |
| 색 | `src/styles/base.css` 맨 위 토큰. 사이트별 강조색은 `[data-site='company']` 등 |

## 구조

```
src/
  pages/index.astro            합본 (이동만)
  pages/company/               회사 사이트
  pages/blog/                  블로그 사이트
  pages/about/                 자기 소개 사이트
  layouts/Shell.astro          html·head 공통 틀 (머리글 없음)
  layouts/CompanyLayout.astro  회사 사이트 머리글·메뉴·바닥글
  layouts/BlogLayout.astro     블로그 사이트 머리글·메뉴·바닥글
  layouts/AboutLayout.astro    자기 소개 사이트 머리글·메뉴·바닥글
  data/                        사이트별 문구 (company·blog·about)
  content/blog, content/games  마크다운 글
  components/PostList.astro    블로그 글 목록
  styles/base.css              공통 색·글꼴·조각
legacy/                        교체 전 사이트 보관본 (배포되지 않음)
.github/workflows/deploy.yml   main 푸시 시 자동 배포
```

## 배포

`main` 에 푸시하면 GitHub Actions가 빌드해 Pages에 올린다. 저장소 Settings → Pages → Source 는 **GitHub Actions** 여야 한다.

## legacy 폴더

2026-10-04 이 사이트로 바꾸기 전의 수제 HTML 블로그(글 3개, 글쓰기 페이지)를 그대로 보관한다. 이전 커밋 기록도 함께 남아 있다. `dist/` 만 배포되므로 사이트에는 나오지 않는다. 다시 공개하려면 `public/legacy/` 로 옮기면 `/legacy/` 주소로 나온다.

## 왜 Astro인가

| 후보 | 장점 | 이 사이트에서의 단점 |
|---|---|---|
| **Astro (선택)** | 마크다운 글 관리, 사이트별 레이아웃 분리가 쉽다. 결과물은 순수 HTML이라 빠르다. 이 PC에 Node가 이미 있어 바로 미리 보기 가능 | 빌드 단계가 있어 GitHub Actions 설정이 필요(포함됨) |
| Jekyll | GitHub Pages가 직접 빌드해 줘서 설정이 가장 적다 | 미리 보기에 Ruby 설치 필요(이 PC에 없음). 허용 플러그인 제한 |
| 순수 HTML/JS | 도구가 전혀 필요 없다 | 글마다 HTML을 만들고 목록을 손으로 관리해야 해서 블로그가 커질수록 불편 |

## 의존성

| 패키지 | 버전 | 목적 | 라이선스 |
|---|---|---|---|
| astro | 7.3.5 | 정적 사이트 생성 | MIT |

`npm audit` 이 `http-cache-semantics` 취약점(GHSA-ch52-4w7c-c8xp)을 보고한다. Astro 내부의 개발·빌드용 캐시에서만 쓰이고 배포되는 HTML에는 포함되지 않는다. `npm audit fix --force` 는 Astro 2로 내려가므로 실행하지 않는다. Astro 업데이트 때 다시 확인한다.
