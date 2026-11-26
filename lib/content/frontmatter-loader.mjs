import { parse } from 'yaml';

export default function frontmatterLoader(source) {
  const match = /^\uFEFF?---[^\S\r\n]*\r?\n([\s\S]*?)^---[^\S\r\n]*(?:\r?\n|$)/m.exec(source);
  if (!match || match.index !== 0) {
    throw new Error(`Missing YAML frontmatter in ${this.resourcePath}`);
  }

  return `export default ${JSON.stringify(parse(match[1]))};`;
}
