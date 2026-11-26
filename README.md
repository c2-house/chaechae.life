# 채채 홈페이지

> <https://chaechae.life>

Next.js 16과 공식 MDX 플러그인으로 만든 채채의 홈페이지 겸 기술 블로그입니다.

> <https://life.chaechae.life>

기술적인 것을 제외한 자유로운 글을 쓰는 블로그

<br />

## 기술 스택

| 분류       | 기술 스택    |
| ---------- | ------------ |
| Framework  | Next.js      |
| Language   | TypeScript   |
| Deployment | Vercel       |
| Styling    | Tailwind CSS |

## 글 작성 가이드

글은 `content/posts`에, 프로젝트는 `content/projects`에 MDX 파일로 작성합니다. 파일 상단의 YAML이 목록, 검색, RSS와 사이트맵에 반영됩니다. 파일명의 slug는 글 주소와 댓글 연결에 사용됩니다.

Node.js 22에서 `npm ci` 후 `npm run dev`로 글을 미리 볼 수 있습니다. 이미지, 링크 카드, 콜아웃을 함께 사용하는 예시는 [python-uv.mdx](content/posts/python-uv.mdx)에서 확인할 수 있습니다.
