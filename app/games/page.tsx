import clsx from 'clsx';
import Link from 'next/link';
import { games } from '@/constants/games';
import GameCardContent from '@/components/Games/GameCardContent';
import ResponsiveAds from '@/components/AdSense/ResponsiveAds';
import { WebsiteIcon } from '@/public/icons';

const GamesPage = () => {
  return (
    <main className="container-lg min-h-[80dvh]">
      <h1 className="pt-4 text-3xl font-bold">chaechae Games</h1>
      <ul className="grid grid-cols-1 gap-5 py-6 md:grid-cols-2">
        {games.map((game) => (
          <li
            key={game.name}
            className="group mx-auto aspect-square w-full max-w-[470px] overflow-hidden rounded-xl bg-gray-100"
          >
            {game.slug ? (
              <Link href={`/games/${game.slug}`}>
                <GameCardContent {...game} />
              </Link>
            ) : (
              <a href={game.url} target="_blank" rel="noopener noreferrer">
                <GameCardContent {...game} />
              </a>
            )}
          </li>
        ))}
        <li
          className={clsx(
            'mx-auto flex aspect-square w-full max-w-[470px] flex-col items-center justify-center rounded-xl border-2 border-gray-100',
            games.length % 2 === 0 &&
              'md:col-span-2 md:aspect-[2/1] md:max-h-[470px] md:max-w-none',
          )}
        >
          <WebsiteIcon className="mb-5 h-36 w-36 lg:mb-7 lg:h-44 lg:w-44" />
          <p className="text-xl text-slate-500 lg:text-2xl">
            <span className="mr-1">새로운 게임 준비 중</span>
            {Array.from('...').map((letter, index) => (
              <span
                key={index}
                className="inline-flex animate-bounce tracking-wide"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {letter}
              </span>
            ))}
          </p>
        </li>
      </ul>
      <ResponsiveAds />
    </main>
  );
};

export default GamesPage;
