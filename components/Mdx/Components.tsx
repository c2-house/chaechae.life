import Link from 'next/link';
import type { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

export const CustomLink = (
  props: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>,
) => {
  if (props.href?.startsWith('/')) {
    return <Link href={props.href}>{props.children}</Link>;
  }

  if (props.href?.startsWith('http')) {
    return <a target="_blank" rel="noopener noreferrer" className="text-indigo-600" {...props} />;
  }

  return <a {...props} />;
};

export const Callout = ({
  emoji = '💡',
  children,
}: {
  emoji?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="my-6 flex rounded bg-slate-100 p-4 text-slate-700">
      <div className="mr-2 text-lg">{emoji}</div>
      <div className="callout">{children}</div>
    </div>
  );
};

export const Flex = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-wrap justify-center gap-8">{children}</div>;
};
