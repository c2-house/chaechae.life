# 기존 MDX 글을 유지하는 Next.js 16 업그레이드

2026년 11월 26일, 커밋 `6e16e7e` 기준.

**추천하는 방법은 글과 프로젝트를 지금처럼 MDX와 YAML로 작성하고, 본문은 공식 `@next/mdx`로 빌드하는 것이다.** Contentlayer가 만들던 글 목록과 메타데이터는 빌드 시 원본 파일에서 추출한다. 이 블로그는 콘텐츠 종류가 두 개이고, 컴파일한 본문을 직접 사용하는 곳도 글 상세와 프로젝트 상세 두 곳이다. [Next.js MDX 가이드](https://nextjs.org/docs/app/guides/mdx) · [글 상세](https://github.com/c2-house/chaechae.life/blob/6e16e7ec3d312dfeb350b5c79facc2ab61862c20/components/Blog/Post.tsx) · [프로젝트 상세](https://github.com/c2-house/chaechae.life/blob/6e16e7ec3d312dfeb350b5c79facc2ab61862c20/components/Projects/ProjectDescription.tsx)

## 이슈의 진단과 실제 검증 결과

잠금 파일 기준 현재 버전은 Next.js 13.5.11, React 18.2.0, Contentlayer 0.3.4다. 원본 Contentlayer는 유지보수 종료를 공지했고, `next-contentlayer@0.3.4`가 선언한 Next.js 버전 범위는 `^12 || ^13`이다. Next.js 공식 지원표에서 13.x는 지원 종료, 16.x는 Active LTS다. 조사일에 npm의 `next@latest`는 **16.4.6**이었다. 실제 전환 시점에 안정 패치와 보안 공지를 다시 확인하고 검증한 버전을 잠금 파일에 기록한다. [잠금 파일](https://github.com/c2-house/chaechae.life/blob/6e16e7ec3d312dfeb350b5c79facc2ab61862c20/package-lock.json) · [Contentlayer 공지](https://github.com/contentlayerdev/contentlayer#readme) · [어댑터 호환 범위](https://github.com/contentlayerdev/contentlayer/blob/v0.3.4/packages/next-contentlayer/package.json) · [Next.js 지원 정책](https://nextjs.org/support-policy) · [npm 안정 버전](https://registry.npmjs.org/next/latest) · [공식 보안 공지](https://github.com/vercel/next.js/security/advisories)

| 검사 | 결과 |
| --- | --- |
| 원본 전체 컴파일 | 글 261개와 프로젝트 5개 모두 원본 그대로 MDX 3.1.1로 컴파일됐다. 컴파일러 진단 메시지는 0건이었다. |
| YAML 읽기 | 266개 모두 제목·설명·썸네일과 종류별 필드 검사를 통과했다. 글에서는 작성자·태그·날짜 형식, 프로젝트에서는 ID·연도·선택적 화면 유형을 검사했다. |
| Next.js 정적 빌드 | 임시 App Router 앱에서 원본 `python-uv.mdx`를 임포트해 Next.js와 `@next/mdx` 16.4.6으로 `next build --webpack`을 실행했다. 생성된 HTML에서 한글 목차 링크, 제목 ID, 코드 강조 블록 11개를 확인했다. YAML은 본문에 나타나지 않았다. |

컴파일 검사에는 `remark-frontmatter@5.0.0`, `remark-gfm@4.0.1`, `remark-toc@9.0.0`, `rehype-slug@6.0.0`, `rehype-autolink-headings@7.1.0`, `rehype-pretty-code@0.14.6`, `shiki@3.23.0`를 사용했다. 목차와 테마 옵션은 현재 설정을 따랐다. 대표 페이지 빌드에서 링크 카드·광고·이미지 등은 단순한 테스트 컴포넌트로 연결했다. 블로그 전체 빌드와 실제 브라우저 동작은 통합 단계의 검증 대상이다. [기존 변환 설정](https://github.com/c2-house/chaechae.life/blob/6e16e7ec3d312dfeb350b5c79facc2ab61862c20/contentlayer.config.ts) · [대표 글 원본](https://github.com/c2-house/chaechae.life/blob/6e16e7ec3d312dfeb350b5c79facc2ab61862c20/content/posts/python-uv.mdx)

## 두 단계로 옮기는 방법

1. **콘텐츠 교체를 먼저 검증한다.** 일반 작업 브랜치에서 현재 Next 13에 맞는 `@next/mdx`를 사용한다. 비교 기준은 같은 커밋에서 새로 생성한 Contentlayer 결과와 운영 URL이다. 조사 시 로컬 생성 캐시에는 글 JSON 파일이 259개였고, 원본은 261개였다. 이전 캐시만 옮기면 새 글을 누락할 수 있다.

   - 빌드 시 `content/posts`와 `content/projects`를 읽고 YAML에서 타입이 있는 메타데이터 목록을 만든다. 기존 필수 필드, 작성자 열거형, 파일명 기반 slug와 프로젝트 name, `/images/blog` 썸네일 경로, 홈에서 사용하는 `type: 'Post'`를 유지한다. 누락 필드나 중복 URL은 파일명과 함께 빌드 오류로 표시한다. 개발 중 파일 추가·이름 변경·삭제도 목록에 반영한다. 기존 자동 발행 작업은 MDX와 이미지만 추가할 수 있으므로 새 글마다 수동 등록하는 단계가 생기면 안 된다. [스키마](https://github.com/c2-house/chaechae.life/blob/6e16e7ec3d312dfeb350b5c79facc2ab61862c20/contentlayer.config.ts) · [홈의 글 타입](https://github.com/c2-house/chaechae.life/blob/6e16e7ec3d312dfeb350b5c79facc2ab61862c20/lib/lifePosts.ts) · [발행 워크플로](https://github.com/c2-house/chaechae.life/blob/6e16e7ec3d312dfeb350b5c79facc2ab61862c20/.github/workflows/01-auto-pr.yml)
   - 목록·검색·태그·작성자·RSS·사이트맵은 메타데이터를 사용한다. 상세 페이지는 목록에서 확인한 slug에 해당하는 MDX 모듈만 불러온다. 빌드 시 파일별 `import()` 목록을 자동 생성하면 번들러가 대상을 알 수 있다. `generateStaticParams`도 같은 목록을 쓴다. 프로젝트 상세의 별도 React 콘텐츠는 MDX 아래에서 계속 렌더링한다. [글 라우트](https://github.com/c2-house/chaechae.life/blob/6e16e7ec3d312dfeb350b5c79facc2ab61862c20/app/blog/[slug]/page.tsx) · [프로젝트 상세](https://github.com/c2-house/chaechae.life/blob/6e16e7ec3d312dfeb350b5c79facc2ab61862c20/components/Projects/ProjectDescription.tsx) · [Next.js MDX 가이드](https://nextjs.org/docs/app/guides/mdx)
   - `@next/mdx`는 YAML을 기본 처리하지 않는다. 메타데이터는 빌드 단계에서 YAML로 파싱하고, 본문 컴파일에는 `remark-frontmatter`를 등록한다. 루트 `mdx-components.tsx`에 기존의 `a`, `Link`, `Image`, `Video`, `Callout`, `Flex`, `Ads`, `pre` 매핑을 옮긴다. 코드 복사와 링크 미리보기처럼 브라우저 기능을 쓰는 컴포넌트는 클라이언트 경계를 유지한다. 목록과 본문 검증을 통과하면 `withContentlayer`, `useMDXComponent`, 생성 타입 경로와 기존 패키지를 제거한다. [MDX의 YAML 처리](https://mdxjs.com/guides/frontmatter/) · [기존 컴포넌트 매핑](https://github.com/c2-house/chaechae.life/blob/6e16e7ec3d312dfeb350b5c79facc2ab61862c20/components/Mdx/index.tsx)

2. **다음 커밋에서 Next.js 16으로 전환한다.** Next.js와 `@next/mdx`를 같은 안정 패치로 맞추고 React·React DOM과 타입을 19 계열로 올린다. 프로젝트의 Node 22.x 설정은 Next.js 16의 최소 요건인 20.9를 충족한다. 링크 미리보기에 쓰는 SWR 2.2.4도 React 19를 지원하는 버전으로 맞춘다. [Next.js 16 변경 사항](https://nextjs.org/docs/app/guides/upgrading/version-16) · [SWR의 React 19 지원](https://github.com/vercel/swr/releases/tag/v2.3.0)

   - 글·태그·작성자·프로젝트 상세와 각 메타데이터 함수의 `params`, 목록·검색 페이지의 `searchParams`를 비동기 방식으로 읽는다. `npm run lint`는 CI에서 계속 쓸 수 있게 내부 명령을 ESLint CLI로 바꾸고 설정을 맞춘다. [Next.js 16 업그레이드 가이드](https://nextjs.org/docs/app/guides/upgrading/version-16)
   - SVG를 React 컴포넌트로 불러오는 Webpack 규칙이 있다. 첫 전환에서는 개발과 빌드를 각각 `next dev --webpack`, `next build --webpack`으로 실행한다. 이렇게 하면 SVG 로더까지 동시에 교체할 필요가 없다. GET 라우트 캐시 기본값은 15에서 바뀌었으므로 RSS를 정적으로 제공하려면 명시하고, URL별로 응답하는 링크 미리보기 API는 별도로 확인한다. [현재 Next.js 설정](https://github.com/c2-house/chaechae.life/blob/6e16e7ec3d312dfeb350b5c79facc2ab61862c20/next.config.js) · [Next.js 15의 GET 캐시 변경](https://nextjs.org/docs/app/guides/upgrading/version-15#route-handlers)

## 운영 전환 기준

- **주소와 게시일** — 전체 글·프로젝트 URL과 사이트맵 목록, 기존 Grok 글 리디렉션, 없는 slug의 404를 대조한다. 댓글은 pathname을 기준으로 연결된다. 글 261개의 게시일은 모두 슬래시 형식이다. 예를 들어 원문의 `2024/10/30`은 로컬 기존 출력에서 `2024-10-29T15:00:00.000Z`였다. 운영 RSS와 OG의 발행 시각, 화면의 한국어 날짜를 기준으로 변환 규칙과 시간대를 명시한다. [댓글 연결](https://github.com/c2-house/chaechae.life/blob/6e16e7ec3d312dfeb350b5c79facc2ab61862c20/components/Blog/Comments.tsx) · [RSS](https://github.com/c2-house/chaechae.life/blob/6e16e7ec3d312dfeb350b5c79facc2ab61862c20/app/blog/rss/route.ts) · [사이트맵](https://github.com/c2-house/chaechae.life/blob/6e16e7ec3d312dfeb350b5c79facc2ab61862c20/app/sitemap.ts)
- **본문과 탐색** — Vercel Preview에서 `/blog/python-uv`의 한글 목차 이동, 코드 복사, 링크 카드, 이미지·캡션, 콜아웃과 광고 위치를 확인한다. `/blog/best-translators-for-developers`에서는 `Flex` 안의 이미지 배치를 확인한다. 글 제목 검색, 다음·이전 글, 태그·작성자 목록, 프로젝트 상세, 홈의 기술 글과 Supabase 생활 글도 함께 확인한다. [대표 글](https://github.com/c2-house/chaechae.life/blob/6e16e7ec3d312dfeb350b5c79facc2ab61862c20/content/posts/python-uv.mdx) · [Flex 사용 글](https://github.com/c2-house/chaechae.life/blob/6e16e7ec3d312dfeb350b5c79facc2ab61862c20/content/posts/best-translators-for-developers.mdx)
- **다음 글 발행과 복구** — Preview 브랜치에 테스트 MDX 한 편을 추가해 상세·목록·RSS·사이트맵에 나타나는지 확인하고, 삭제 후 정리되는지도 본다. 같은 Node 22 환경에서 깨끗한 설치, 린트, 타입 검사, 프로덕션 빌드를 통과한 뒤 배포한다. 직전 정상 Vercel 배포를 기록해 두고 운영에서 URL·본문 회귀가 발견되면 그 배포로 복귀한다. [발행 워크플로](https://github.com/c2-house/chaechae.life/blob/6e16e7ec3d312dfeb350b5c79facc2ab61862c20/.github/workflows/01-auto-pr.yml) · [Vercel 롤백](https://vercel.com/docs/instant-rollback)

메타데이터 목록 생성과 개발 중 파일 감시까지 라이브러리에 맡기고 싶다면 **Content Collections**도 후보이다. Next 어댑터가 13과 16을 모두 호환 범위에 포함하고 스키마 기반 목록을 제공한다. 이번에 기존 글로 직접 실행해 본 경로는 공식 MDX 조합이다. [Content Collections](https://github.com/sdorra/content-collections) · [어댑터 호환 범위](https://github.com/sdorra/content-collections/blob/main/packages/next/package.json)
