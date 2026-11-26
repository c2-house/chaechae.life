import assert from 'node:assert/strict';
import test from 'node:test';
import { collectPreviewLinks } from './preview-links-loader.mjs';

test('only literal MDX link cards contribute preview URLs', () => {
  const source = [
    '---',
    'example: <Link url="https://example.org/frontmatter" />',
    '---',
    '',
    '<Link url="https://example.org/first?x=1&amp;y=2#top" />',
    '',
    'Inline <Link url="https://example.org/second" /> card.',
    '',
    '<Link url="https://example.org/second" />',
    '',
    '`<Link url="https://example.org/code" />`',
    '',
    '```jsx',
    '<Link url="https://example.org/fence" />',
    '```',
    '',
    '[regular link](https://example.org/regular)',
    '',
    '<Other url="https://example.org/other" />',
    '',
    '<Link url={dynamicUrl} />',
    '',
    '<Link url="https://example.org/overridden" {...props} />',
  ].join('\n');

  assert.deepEqual(collectPreviewLinks(source), [
    'https://example.org/first?x=1&y=2#top',
    'https://example.org/second',
  ]);
});
