import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import remarkGfm from 'remark-gfm';
import remarkToc, { Options as RemarkTocOptions } from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode, { Options as PrettyCodeOptions } from 'rehype-pretty-code';

import { authors, tags } from './constants/pages';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    author: {
      type: 'enum',
      required: true,
      options: authors,
    },
    date: {
      type: 'date',
      required: true,
    },
    tags: {
      type: 'list',
      required: true,
      of: {
        type: 'enum',
        options: tags,
      },
    },
    thumbnail: {
      type: 'string',
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath,
    },
    image: {
      type: 'string',
      resolve: (doc) => `/images/blog${doc.thumbnail}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [
      remarkGfm,
      [remarkToc, { heading: '목차' } satisfies Partial<RemarkTocOptions>],
    ],
    rehypePlugins: [
      rehypeSlug,
      rehypeAutolinkHeadings,
      [rehypePrettyCode, { theme: 'one-dark-pro' } satisfies Partial<PrettyCodeOptions>],
    ],
  },
});
