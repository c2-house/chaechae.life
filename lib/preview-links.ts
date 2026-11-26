interface LinkContext {
  keys(): string[];
  (key: string): { default: string[] };
}

declare const require: {
  context(directory: string, recursive: boolean, filter: RegExp): LinkContext;
};

const documents = require.context(
  '!!./content/preview-links-loader.mjs!../content',
  true,
  /^\.\/(?:posts|projects)\/.+\.mdx$/,
);
const urls = new Set(documents.keys().flatMap((key) => documents(key).default));

export function hasPreviewLink(url: string): boolean {
  return urls.has(url);
}
