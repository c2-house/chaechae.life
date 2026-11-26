import type { MDXComponents } from 'mdx/types';
import InarticleAds from '@/components/AdSense/InarticleAds';
import { CodeBlock } from '@/components/Mdx/CodeBlock';
import { Callout, CustomLink, Flex } from '@/components/Mdx/Components';
import { NextImage, Video } from '@/components/Mdx/Figure';
import LinkPreview from '@/components/Mdx/LinkPreview';

export const mdxComponents: MDXComponents = {
  a: CustomLink,
  Link: LinkPreview,
  Image: NextImage,
  Video,
  Callout,
  Flex,
  Ads: InarticleAds,
  pre: CodeBlock,
};

export function useMDXComponents() {
  return mdxComponents;
}
