import { Metadata } from 'next';
import { title, openGraph } from '@/app/shared-metadata';

const ogTitle = `기술 블로그 - ${title}`;
const description = '개발자 부부 채채의 개발 경험과 개발자로서의 삶을 공유하는 블로그입니다.';

export const metadata: Metadata = {
  title: '기술 블로그',
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
