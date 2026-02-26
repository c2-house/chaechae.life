import Image from 'next/image';
import { type Post } from 'contentlayer/generated';
import Mdx from '../Mdx';
import { Tags } from './Tags';
import Author from './Author';
import InarticleAds from '../AdSense/InarticleAds';

const Post = ({ post }: { post: Post }) => {
  return (
    <article className="prose prose-slate mx-auto py-6 lg:prose-lg prose-figcaption:text-sm md:py-10">
      <header>
        <h1 className="!mb-4 break-all font-bold md:!mb-6">{post.title}</h1>
        <div className="mb-4 text-sm md:mb-6 lg:text-base">
          <Author author={post.author} date={post.date} />
        </div>
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
