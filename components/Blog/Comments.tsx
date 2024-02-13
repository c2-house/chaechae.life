'use client';

import { DiscussionEmbed } from 'disqus-react';

interface Props {
  slug: string;
  title: string;
}

const Comments = ({ slug, title }: Props) => {
  if (!process.env.NEXT_PUBLIC_DISQUS_SHORTNAME) return null;

  return (
    <DiscussionEmbed
      shortname={process.env.NEXT_PUBLIC_DISQUS_SHORTNAME}
      config={{
        url: `https://chaechae.life/blog/${slug}`,
        identifier: slug,
        title,
      }}
    />
  );
};

export default Comments;
