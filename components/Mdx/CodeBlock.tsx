'use client';

import { useRef, useState, DetailedHTMLProps, HTMLAttributes, MouseEvent } from 'react';
import { Check, Copy } from 'lucide-react';

export const CodeBlock = (
  props: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>,
) => {
  const [copied, setCopied] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);

  const copyToClipboard = async (e: MouseEvent<HTMLButtonElement>) => {
    const codeContent = preRef.current?.firstChild?.textContent;

    if (codeContent) {
      await navigator.clipboard.writeText(codeContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="relative">
      <pre ref={preRef} {...props}>
        {props.children}
      </pre>
      <button
        className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded border border-white border-opacity-20 bg-white bg-opacity-0 text-white hover:border-opacity-40 hover:bg-opacity-10"
        onClick={copyToClipboard}
        aria-label="코드 복사"
        type="button"
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
      </button>
    </div>
  );
};
