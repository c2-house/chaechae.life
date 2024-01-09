import { Metadata } from 'next';
import { title, blogDescription as description, openGraph } from '@/app/shared-metadata';

const ogTitle = `${title} - 블로그`;

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
