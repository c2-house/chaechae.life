import { Metadata } from 'next';
import { title, openGraph } from '@/app/shared-metadata';

const ogTitle = `게임 - ${title}`;
const description = '바이브 코딩으로 개발한 재미있는 게임들을 소개합니다.';

export const metadata: Metadata = {
  title: '게임',
  description,
  openGraph: {
    ...openGraph,
    title: ogTitle,
    description,
    url: '/games',
  },
  twitter: {
    title: ogTitle,
    description,
    card: 'summary_large_image',
  },
};

const Layout = ({ children }: { children: React.ReactNode }) => children;

export default Layout;
