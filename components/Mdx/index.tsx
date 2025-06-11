'use client';

import dynamic from 'next/dynamic';
import type { MDXComponents } from 'mdx/types';
import { useMDXComponent } from 'next-contentlayer/hooks';

import { CustomLink, Callout, Flex } from './Components';
import { NextImage, Video } from './Figure';
import { CodeBlock } from './CodeBlock';
import LinkPreview from './LinkPreview';
import InarticleAds from '../AdSense/InarticleAds';

const mdxComponents: MDXComponents = {
  a: CustomLink,
  Link: LinkPreview,
  Image: NextImage,
  Video,
  Callout,
  Flex,
  Ads: InarticleAds,
  pre: CodeBlock,
};

const Mdx = ({ code }: { code: string }) => {
  const MDXComponent = useMDXComponent(code);

  return <MDXComponent components={mdxComponents} />;
};

export default Mdx;
