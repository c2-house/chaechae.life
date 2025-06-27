import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import remarkGfm from 'remark-gfm';
import remarkToc, { Options as RemarkTocOptions } from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode, { Options as PrettyCodeOptions } from 'rehype-pretty-code';

import { authors, tags } from './constants/pages';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/**/*.mdx`,
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
        type: 'string',
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
      resolve: (doc) => doc._raw.flattenedPath.split('/')[1],
    },
    image: {
      type: 'string',
      resolve: (doc) => `/images/blog${doc.thumbnail}`,
    },
  },
}));

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `projects/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    id: {
      type: 'number',
      required: true,
    },
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    thumbnail: {
      type: 'string',
      required: true,
    },
    mockupType: {
      type: 'enum',
      options: ['mobile', 'desktop'],
    },
    year: {
      type: 'number',
      required: true,
    },
  },
  computedFields: {
    name: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.split('/')[1],
    },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post, Project],
  mdx: {
    remarkPlugins: [
      remarkGfm,
      [
        remarkToc,
        { heading: '목차', maxDepth: 3, skip: '참고자료' } satisfies Partial<RemarkTocOptions>,
      ],
    ],
    rehypePlugins: [
      rehypeSlug,
      rehypeAutolinkHeadings,
      [rehypePrettyCode, { theme: 'one-dark-pro' } satisfies Partial<PrettyCodeOptions>],
    ],
  },
});
