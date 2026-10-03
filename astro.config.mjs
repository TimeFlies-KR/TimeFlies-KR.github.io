import { defineConfig } from 'astro/config';

// 저장소 이름이 <계정>.github.io 이면 base 없이 루트에 배포된다.
// 다른 이름의 저장소라면 base: '/<저장소 이름>' 을 추가한다.
export default defineConfig({
  site: 'https://timeflies-kr.github.io',
});
