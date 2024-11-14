import clsx from 'clsx';
import Image from 'next/image';

interface VideoProps {
  src: string;
  caption?: string;
}

interface ImageProps extends VideoProps {
  alt: string;
  fullWidth?: boolean;
  path?: string;
  className?: string;
}

export const NextImage = ({
  src,
  alt,
  caption,
  className,
  fullWidth = true,
  path = '/blog',
}: ImageProps) => {
  return (
    <figure>
      <Image
        src={`/images${path}${src}`}
        alt={alt}
        width={fullWidth ? 700 : 300}
        height={fullWidth ? 365 : 300}
        className={clsx('mx-auto', className)}
      />
      {caption && <figcaption className="text-center">{caption}</figcaption>}
    </figure>
  );
};

export const YoutubeVideo = ({ src, caption }: VideoProps) => {
  return (
    <figure>
      <iframe
        className="aspect-video w-full"
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
      {caption && <figcaption className="text-center">{caption}</figcaption>}
    </figure>
  );
};
