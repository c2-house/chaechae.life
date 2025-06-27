import dayjs from 'dayjs';
import Link from 'next/link';
import Image from 'next/image';
import { slugify } from './utils';
import type { BlogPost } from '@/lib/lifePosts';

const ProfileImage = ({ src }: { src: string }) => {
  return (
    <Image
      src={src}
      alt="프로필 사진"
      width={24}
      height={24}
      className="mr-1.5 rounded-full border border-slate-200 bg-white"
      unoptimized
    />
  );
};

interface AuthorProps {
  author: BlogPost['author'];
  date: string;
}

const Author = ({ author, date }: AuthorProps) => {
  return (
    <div className="flex items-center">
      {typeof author === 'string' ? (
        <Link
          href={`/blog/author/${slugify(author)}`}
          className="not-prose flex items-center hover:underline"
        >
          <ProfileImage src={`/images/avatar/${slugify(author)}-1.png`} />
          <span>{author}</span>
        </Link>
      ) : (
        <div className="not-prose flex items-center">
          <ProfileImage src={author.avatar_url} />
          <span>{author.name}</span>
        </div>
      )}

      <time
        className="text-slate-500 before:px-1.5 before:content-['·']"
        dateTime={dayjs(date).format('YYYY-MM-DD')}
      >
        {dayjs(date).format('MMM D, YYYY')}
      </time>
    </div>
  );
};

export default Author;
