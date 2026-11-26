import { createProcessor } from '@mdx-js/mdx';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';

const parser = createProcessor({ remarkPlugins: [remarkFrontmatter, remarkGfm] });

export function collectPreviewLinks(source) {
  const urls = new Set();

  function collect(node) {
    if (
      (node.type === 'mdxJsxFlowElement' || node.type === 'mdxJsxTextElement') &&
      node.name === 'Link'
    ) {
      const urlAttrs = node.attributes.filter((attr) => attr.name === 'url');
      const value = urlAttrs[0]?.value;
      const hasSpread = node.attributes.some((attr) => attr.type === 'mdxJsxExpressionAttribute');
      if (!hasSpread && urlAttrs.length === 1 && typeof value === 'string') urls.add(value);
    }
    node.children?.forEach(collect);
  }

  collect(parser.parse(source));
  return [...urls];
}

export default function previewLinksLoader(source) {
  return `export default ${JSON.stringify(collectPreviewLinks(source))};`;
}
