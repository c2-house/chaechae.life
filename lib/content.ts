import { z } from 'zod';
import { authors } from '@/constants/pages';

interface MetadataContext {
  keys(): string[];
  (key: string): { default: unknown };
}

declare const require: {
  context(directory: string, recursive: boolean, filter: RegExp): MetadataContext;
};

// Production feeds use UTC midnight for posts authored as YYYY/MM/DD.
const date = z
  .string()
  .transform((value) =>
    value.replace(/^(\d{4})\/(\d{1,2})\/(\d{1,2})$/, (_, year, month, day) =>
      [year, month.padStart(2, '0'), day.padStart(2, '0')].join('-'),
    ),
  )
  .pipe(z.union([z.iso.date(), z.iso.datetime({ offset: true })]))
  .transform((value) => new Date(value).toISOString());

const base = z.object({
  title: z.string().min(1),
  description: z.string(),
  thumbnail: z.string(),
});

const postFields = base.extend({
  author: z.enum(authors),
  date,
  tags: z.array(z.string()),
});

const projectFields = base.extend({
  id: z.number(),
  year: z.number(),
  mockupType: z.enum(['mobile', 'desktop']).optional(),
});

function readCollection<S extends z.ZodType>(
  directory: string,
  context: MetadataContext,
  schema: S,
) {
  const routes = new Set<string>();
  return context
    .keys()
    .sort()
    .map((key) => {
      const source = key.slice(2, -'.mdx'.length);
      const slug = source.split('/')[0];
      if (routes.has(slug)) throw new Error(`Duplicate route "${slug}" in content/${directory}`);
      routes.add(slug);

      const parsed = schema.safeParse(context(key).default);
      if (!parsed.success)
        throw new Error(`content/${directory}/${source}.mdx: ${parsed.error.message}`);
      const fields: z.output<S> = parsed.data;
      return { fields, slug, source };
    });
}

// The context tracks added and removed files. The inline loader includes only their YAML in listing routes.
const posts = require.context(
  '!!./content/frontmatter-loader.mjs!../content/posts',
  true,
  /^\.\/.+\.mdx$/,
);
const projects = require.context(
  '!!./content/frontmatter-loader.mjs!../content/projects',
  true,
  /^\.\/.+\.mdx$/,
);

export const allPosts = readCollection('posts', posts, postFields).map(
  ({ fields, slug, source }) => ({
    ...fields,
    type: 'Post' as const,
    image: `/images/blog${fields.thumbnail}`,
    slug,
    source,
  }),
);

export const allProjects = readCollection('projects', projects, projectFields).map(
  ({ fields, slug, source }) => ({
    ...fields,
    type: 'Project' as const,
    name: slug,
    source,
  }),
);

export type Post = (typeof allPosts)[number];
export type Project = (typeof allProjects)[number];
