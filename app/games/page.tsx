import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';
import ResponsiveAds from '@/components/AdSense/ResponsiveAds';
import { WebsiteIcon } from '@/public/icons';

const games = [
  {
    name: '똥피하기',
    slug: 'poop-dodge',
    thumbnail: '/images/games/poop/poop-dodge-thumbnail.png',
    description: '똥을 피해 살아남으세요!',
  },
  // 추후 게임 추가 가능
];

const GamesPage = () => {
  return (
    <main className="container-lg min-h-[80dvh]">
      <h1 className="pt-4 text-3xl font-bold">chaechae Games</h1>
      <ul className="grid grid-cols-1 gap-5 py-6 md:grid-cols-2">
        {games.map((game) => (
          <li
            key={game.slug}
            className="group mx-auto aspect-square w-full max-w-[470px] overflow-hidden rounded-xl bg-gray-100"
          >
            <Link href={`/games/${game.slug}`}>
              <article className="flex h-full flex-col p-5 lg:p-8">
                <header>
                  <h2 className="text-2xl font-semibold lg:text-3xl">{game.name}</h2>
                  <hr className="my-3 lg:my-4" />
                </header>
                <div className="flex flex-1 flex-col items-center justify-center">
                  <Image
                    src={game.thumbnail}
                    alt={game.name}
                    width={320}
                    height={220}
                    className="mx-auto max-h-56 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                  <p className="mt-6 text-center text-base font-medium text-slate-700">
                    {game.description}
                  </p>
                </div>
              </article>
            </Link>
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
