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

const components: MDXComponents = {
  a: CustomLink,
  Link: LinkPreview,
  Image: NextImage,
  Youtube: YoutubeVideo,
};

const Mdx = ({ code }: { code: string }) => {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
};

export default Mdx;
