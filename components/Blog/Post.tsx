import Image from 'next/image';
import dayjs from 'dayjs';
import { type Post } from 'contentlayer/generated';
import Mdx from '../Mdx';
import { Tags } from './Tags';
import InarticleAds from '../AdSense/InarticleAds';

const Post = ({ post }: { post: Post }) => {
  return (
    <article className="prose prose-slate mx-auto py-6 lg:prose-lg prose-figcaption:text-sm md:py-10">
      <header>
        <h1>{post.title}</h1>
        <time
          className="mb-4 block text-sm text-slate-500"
          dateTime={dayjs(post.date).format('YYYY-MM-DD')}
        >
          {dayjs(post.date).format('YYYY년 M월 D일')}
        </time>
        <Tags tags={post.tags} />
      </header>
      <hr className="not-prose my-8 lg:my-10" />
      <Image
        src={post.image}
        alt={post.title}
        width={700}
        height={365}
        className="h-full w-full object-cover"
      />
      <InarticleAds />
      <section>
        <Mdx code={post.body.code} />
      </section>
      <InarticleAds />
    </article>
  );
};

export default Post;
