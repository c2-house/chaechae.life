import { Metadata } from 'next';
import { title, openGraph } from '@/app/shared-metadata';

const ogTitle = `프로젝트 - ${title}`;
const description =
  '프론트엔드 개발자 은채와 백엔드 개발자 민채가 함께 개발한 서비스들을 소개합니다.';

export const metadata: Metadata = {
  title: '프로젝트',
  description,
  openGraph: {
    ...openGraph,
    title: ogTitle,
    description,
    url: '/projects',
  },
  twitter: {
    title: ogTitle,
    description,
    card: 'summary_large_image',
  },
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <main className="container-lg">{children}</main>;
};

export default Layout;
