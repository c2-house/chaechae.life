import dynamic from 'next/dynamic';
import type { MDXComponents } from 'mdx/types';
import { useMDXComponent } from 'next-contentlayer/hooks';

import { NextImage, Video } from './Figure';
import { CustomLink, Callout, Flex } from './Components';
import InarticleAds from '../AdSense/InarticleAds';

const LinkPreview = dynamic(() => import('./LinkPreview'));

const mdxComponents: MDXComponents = {
  a: CustomLink,
  Link: LinkPreview,
  Image: NextImage,
  Video,
  Callout,
  Flex,
  Ads: InarticleAds,
};

const Mdx = ({ code }: { code: string }) => {
  const MDXComponent = useMDXComponent(code);

  return <MDXComponent components={mdxComponents} />;
};

export default Mdx;
