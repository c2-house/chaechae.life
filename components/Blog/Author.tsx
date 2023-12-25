import dayjs from 'dayjs';
import Link from 'next/link';

interface Props {
  author: string;
  date: string;
}

const Author = ({ author, date }: Props) => {
  return (
    <>
      <Link
        href={`/blog/author/${author.toLowerCase()}`}
        className="not-prose text-gray-500 hover:underline"
      >
        {author}
      </Link>
      <time
        className="text-gray-500 before:px-1.5 before:content-['·']"
        dateTime={dayjs(date).format('YYYY-MM-DD')}
      >
        {dayjs(date).format('MMM D, YYYY')}
      </time>
    </>
  );
};

export default Author;
