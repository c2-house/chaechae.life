import { unstable_cache } from 'next/cache';
import type { Post } from 'contentlayer/generated';
import { supabase } from './supabase';

export type BlogPost = Post | LifePost;

export interface LifePost {
  type: 'LifePost';
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string | null;
  date: string;
  is_draft: boolean;
  tags: string[] | null;
  author: {
    name: string;
    avatar_url: string;
  };
}

export const getLifePosts = unstable_cache(
  async () => {
    const { data: posts, error } = await supabase
      .from('posts')
      .select(
        `
      id,
      title,
      slug,
      description,
      image:thumbnail_url,
      date:created_at,
      is_draft,
      tags,
      author:author_id(name, avatar_url)
    `,
      )
      .eq('is_draft', false)
      .order('created_at', { ascending: false })
      .range(0, 4);

    if (error) return [];

    return posts.map(
      (post) =>
        ({
          ...post,
          type: 'LifePost',
        }) as LifePost,
    );
  },
  ['lifePosts'],
  {
    revalidate: 86400, // 24 hours
  },
);
