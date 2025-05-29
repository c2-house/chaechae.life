import type { Metadata } from 'next';
import { openGraph } from '@/app/shared-metadata';

const ogTitle = '똥피하기';
const description = '똥을 피해 살아남으세요! 기록을 세우고 리더보드에 도전하세요.';

export const metadata: Metadata = {
  title: ogTitle,
  description,
  openGraph: {
    ...openGraph,
    title: ogTitle,
    description,
    url: '/games/poop-dodge',
    images: [
      {
        url: '/images/games/poop/poop-dodge-thumbnail.png',
        width: 1200,
        height: 630,
        alt: '똥피하기 게임 썸네일',
      },
    ],
  },
  twitter: {
    title: ogTitle,
    description,
    card: 'summary_large_image',
    images: ['/images/games/poop/poop-dodge-thumbnail.png'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
} 