import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import clsx from 'clsx';
import './globals.css';

import { defaultMetadata, host } from '@/constants/metadata';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

const inter = Inter({ subsets: ['latin'] });

const { title, description } = defaultMetadata;
const rootTitle = `${title} - 개발자 부부 채채`;

export const metadata: Metadata = {
  metadataBase: new URL(host),
  title: {
    default: title,
    template: `%s - ${title}`,
    absolute: rootTitle,
  },
  description,
  openGraph: {
    title: rootTitle,
    description,
    url: '/',
    siteName: title,
    type: 'website',
    locale: 'ko_KR',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    title: rootTitle,
    description,
    card: 'summary_large_image',
  },
  alternates: {
    types: {
      'application/rss+xml': [
        {
          title: `${title} - Feed`,
          url: '/blog/rss',
        },
      ],
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="ko">
    <body className={clsx('text-gray-900', inter.className)}>
      <Header />
      {children}
      <Footer />
    </body>
  </html>
);

export default RootLayout;
