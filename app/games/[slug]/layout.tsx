import { Metadata } from 'next';
import { allProjects } from 'contentlayer/generated';
import { openGraph, title as baseTitle } from '@/app/shared-metadata';
import { games } from '@/constants/games';

interface Props {
  params: {
    slug: string;
  };
}

export const generateMetadata = async ({ params: { slug } }: Props): Promise<Metadata> => {
  const game = games.find((game) => game.slug === slug);

  if (!game) return {};

  const { name: gameTitle, description, thumbnail } = game;
  const title = `${gameTitle} - ${baseTitle}`;

  return {
    title,
    description,
    openGraph: {
      ...openGraph,
      title,
      description,
      url: `/games/${slug}`,
      images: [{ url: thumbnail, alt: gameTitle }],
    },
    twitter: {
      title,
      description,
      card: 'summary_large_image',
    },
  };
};

const Layout = ({ children }: { children: React.ReactNode }) => children;

export default Layout;
