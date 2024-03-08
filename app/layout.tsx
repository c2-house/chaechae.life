import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import clsx from 'clsx';
import './globals.css';

import { title, description, openGraph } from '@/app/shared-metadata';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://chaechae.life'),
  title: {
    default: title,
    template: `%s - ${title}`,
    absolute: `${title} - 개발자 부부 채채의 개발 이야기`,
  },
  description,
  openGraph: {
    ...openGraph,
    title,
    description,
    url: '/',
  },
  twitter: {
    title,
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
    <head>
      <meta name="google-site-verification" content="yAPCOjrjXkneaFLU21zJVUZT_mDKpTL3BM8QPsHgvN0" />
      <meta name="naver-site-verification" content="122255a4016836acf755c9b414e0394869ece0ea" />
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID}`}
        crossOrigin="anonymous"
      />
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
        `}
      </Script>
    </head>
    <body className={clsx('text-slate-900', inter.className)}>
      <Header />
      {children}
      <Footer />
    </body>
  </html>
);

export default RootLayout;
