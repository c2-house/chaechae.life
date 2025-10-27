import Image from 'next/image';

interface Props {
  name: string;
  description: string;
  thumbnail: string;
}

const GameCardContent = ({ name, description, thumbnail }: Props) => {
  return (
    <article className="flex h-full flex-col p-5 lg:p-8">
      <header>
        <h2 className="text-2xl font-semibold lg:text-3xl">{name}</h2>
        <hr className="my-3 lg:my-4" />
      </header>
      <div className="flex flex-1 flex-col items-center justify-center">
        <Image
          src={thumbnail}
          alt={name}
          width={320}
          height={220}
          className="mx-auto max-h-56 object-contain transition-transform duration-300 group-hover:scale-110"
        />
        <p className="mt-6 text-center text-base font-medium text-slate-700">{description}</p>
      </div>
    </article>
  );
};

export default GameCardContent;
