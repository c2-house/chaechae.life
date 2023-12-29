import Link from 'next/link';
import type { MDXComponents } from 'mdx/types';
import { useMDXComponent } from 'next-contentlayer/hooks';

import LinkPreview from './LinkPreview';
import { NextImage, YoutubeVideo } from './Figure';

const CustomLink = (props: any) => {
  if (props.href.startsWith('/')) {
    return <Link href={props.href}>{props.children}</Link>;
  }

  if (props.href.startsWith('http')) {
    return <a target="_blank" rel="noopener noreferrer" {...props} />;
  }

  return <a {...props} />;
};

const Callout = ({ emoji, children }: { emoji: string; children: React.ReactNode }) => {
  return (
    <div className="flex rounded bg-slate-100 p-4 text-slate-700">
      <div className="mr-2 text-lg">{emoji}</div>
      <div className="callout">{children}</div>
    </div>
  );
};

const mdxComponents: MDXComponents = {
  a: CustomLink,
  Link: LinkPreview,
  Image: NextImage,
  Youtube: YoutubeVideo,
  Callout,
};

const Mdx = ({ code }: { code: string }) => {
  const MDXComponent = useMDXComponent(code);

  return <MDXComponent components={mdxComponents} />;
};

export default Mdx;
