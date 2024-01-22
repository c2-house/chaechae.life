import clsx from 'clsx';
import Image from 'next/image';

export interface ProjectShowcaseCardProps {
  title: React.ReactNode;
  description?: string;
  showcaseType: 'image' | 'video';
  src: string;
  poster?: string;
  cardBg?: string;
  phoneBg?: string;
}

const ProjectShowcaseCard = ({
  title,
  description,
  showcaseType,
  src,
  poster,
  cardBg,
  phoneBg,
}: ProjectShowcaseCardProps) => {
  return (
    <figure className={clsx('rounded-2xl px-5 py-10 md:py-12', cardBg || 'bg-slate-50')}>
      <div className="text-center text-xl md:text-2xl">
        {title}
        {description && <p className="mt-3 text-base text-slate-500 md:text-lg">{description}</p>}
      </div>

      <div
        className={clsx(
          'mx-auto max-w-[300px] overflow-hidden rounded-[40px] border-[10px] border-slate-200 py-4 shadow-md',
          phoneBg || 'bg-white',
        )}
      >
        {showcaseType === 'image' && (
          <Image src={src} alt="" width={280} height={500} className="not-prose" />
        )}
        {showcaseType === 'video' && (
          <video
            className="not-prose h-auto w-full"
            poster={poster}
            playsInline
            autoPlay
            loop
            muted
          >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </figure>
  );
};

export default ProjectShowcaseCard;
