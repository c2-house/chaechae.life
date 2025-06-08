import { Metadata } from 'next';
import { openGraph, title as baseTitle } from '@/app/shared-metadata';
import { games } from '@/constants/pages';

const { name: title, description, slug, thumbnail } = games[0];
const ogTitle = `${title} - ${baseTitle}`;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    ...openGraph,
    title: ogTitle,
    description,
    url: `/games/${slug}`,
    images: [{ url: thumbnail, alt: title }],
  },
  twitter: {
    title: ogTitle,
    description,
    card: 'summary_large_image',
  },
};

const PoopDodgePage = () => {
  return (
    <main className="container-lg py-10">
      <h1 className="mb-2 text-3xl font-bold">똥피하기</h1>
      <p className="mb-6 text-lg text-slate-600">똥을 피해 살아남으세요!</p>
      <hr className="mb-8" />
      <div className="flex justify-center">
        <iframe
          src="https://poop-dodge-chi.vercel.app/"
          title="똥피하기 게임"
          className="h-[70vh] min-h-[500px] w-full max-w-7xl rounded-xl border border-gray-200 shadow-lg"
          allowFullScreen
        ></iframe>
      </div>
    </main>
  );
};

export default PoopDodgePage;
