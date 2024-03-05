'use client';

import { useEffect, useRef } from 'react';

const Comments = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://utteranc.es/client.js';
    script.async = true;
    script.setAttribute('repo', process.env.NEXT_PUBLIC_GITHUB_REPO_NAME || '');
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('label', 'blog-comment');
    script.setAttribute('theme', 'github-light');
    script.setAttribute('crossorigin', 'anonymous');

    ref.current && ref.current.appendChild(script);
  }, []);

  return <div ref={ref}></div>;
};

export default Comments;
