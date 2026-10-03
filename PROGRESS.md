# 진행 상황

## 현재 상태
프로토타입. 로컬에서 빌드·미리 보기만 확인했고 아직 GitHub에 올리지 않았다.

## 지금 할 일
- [미정] 배포 저장소 결정: 기존 `TimeFlies-KR/TimeFlies-KR.github.io`(공개, 현재 수제 HTML 블로그가 운영 중, 글 3개)를 이 사이트로 교체할지, 다른 이름의 새 공개 저장소를 만들지 사용자 결정 필요.
- 예시 문구 교체: `src/content/pages/about.md`, `company.md` 의 "(작성 필요)" 부분, `src/site.config.ts` 의 사이트 이름·소개.

## 작업한 것
### 2026-10-04 / 사이트 프로토타입
- 목표: 게임 소개·개발 블로그·자기 소개·회사 소개를 섹션으로 나눠 설정에서 켜고 끌 수 있는 통합 사이트.
- 결정: Astro 7.3.5 + GitHub Actions 배포 (이유는 README "왜 Astro인가"). 라이트/다크는 시스템 설정을 따른다.
- 변경 파일: 이 폴더 전체 신규.
- 실행한 검증:
  - `npm run build` 성공, 9페이지 생성.
  - `npm run dev` 로 첫 화면, 게임 글, 블로그 글 페이지 내용 확인. 콘솔 오류 없음.
  - 모바일 폭(375px)·다크 모드 화면 확인, 가로 스크롤 없음.
  - `company` 섹션 `enabled: false` 로 빌드 → 8페이지, `/company/` 미생성 확인 후 되돌림.
- 미검증: GitHub Actions 배포(`.github/workflows/deploy.yml`)는 실제로 실행해 보지 않았다.

## 해야 할 것
- 지금: 배포 저장소 결정 → 푸시 → Pages Source를 GitHub Actions로 변경 → 배포 확인.
- 다음: 기존 github.io 블로그 글 3개(`posts/2026083x~0902-팀-스파르타-*.html`)를 마크다운으로 옮길지 결정.
- 나중(제안): 태그별 목록, RSS, 게임 웹 빌드 삽입, 수동 라이트/다크 전환 버튼.
