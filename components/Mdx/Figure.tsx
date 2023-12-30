import Image from 'next/image';

interface VideoProps {
  src: string;
  caption?: string;
}

interface ImageProps extends VideoProps {
  alt: string;
  fullWidth?: boolean;
}

export const NextImage = ({ src, alt, caption, fullWidth = true }: ImageProps) => {
  return (
    <figure>
      <Image
        src={`/images/blog${src}`}
        alt={alt}
        width={fullWidth ? 730 : 400}
        height={fullWidth ? 548 : 400}
        className="mx-auto"
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
