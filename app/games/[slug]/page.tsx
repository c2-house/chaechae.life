import { notFound } from 'next/navigation';
import { games } from '@/constants/games';
import GameScreen from '@/components/Games/GameScreen';
import ResponsiveAds from '@/components/AdSense/ResponsiveAds';

interface Props {
  params: {
    slug: string;
  };
}

export const generateStaticParams = async () => {
  return games.map((game) => ({ slug: game.slug }));
};

const Page = ({ params: { slug } }: Props) => {
  const game = games.find((game) => game.slug === slug);

  if (!game) return notFound();

  return (
    <main className="container-lg py-10">
      <h1 className="mb-2 text-3xl font-bold">{game.name}</h1>
      <p className="mb-6 text-lg text-slate-600">{game.description}</p>
      <hr className="mb-8" />
      <GameScreen url={game.url} name={game.name} />
      <ResponsiveAds />
    </main>
  );
};

export default Page;
