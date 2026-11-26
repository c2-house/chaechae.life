import type { MDXContent } from 'mdx/types';

export async function loadPostBody(source: string): Promise<MDXContent> {
  return (await import(`../content/posts/${source}.mdx`)).default;
}

export async function loadProjectBody(source: string): Promise<MDXContent> {
  return (await import(`../content/projects/${source}.mdx`)).default;
}
