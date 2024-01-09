import { Metadata } from 'next';
import { title, openGraph } from '@/app/shared-metadata';

const ogTitle = `${title} - 블로그`;
const description =
  '프론트엔드, 백엔드 개발자 부부 채채의 개발 경험과 개발자로서의 삶을 공유하는 블로그입니다.';

export const metadata: Metadata = {
  title: '블로그',
  description,
  openGraph: {
    ...openGraph,
    title: ogTitle,
    description,
    url: '/blog',
  },
  twitter: {
    title: ogTitle,
    description,
    card: 'summary_large_image',
  },
};

const Layout = ({ children }: { children: React.ReactNode }) => children;

export default Layout;
