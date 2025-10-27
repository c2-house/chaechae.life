'use client';

import { useRef } from 'react';
import { Maximize } from 'lucide-react';

const GameScreen = ({ url, name }: { url: string; name: string }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleFullScreen = () => {
    iframeRef.current?.requestFullscreen();
  };

  return (
    <div className="relative mb-6 flex justify-center">
      <div className="fixed inset-0 z-10 w-full bg-white lg:static lg:z-0">
        <iframe
          ref={iframeRef}
          src={url}
          title={`${name} 게임`}
          className="h-[100svh] w-full lg:h-[70vh] lg:min-h-[500px] lg:max-w-7xl lg:rounded-xl lg:border lg:border-gray-200 lg:shadow-lg"
          allowFullScreen
        ></iframe>
      </div>
      <button
        onClick={handleFullScreen}
        className="absolute right-4 top-4 hidden rounded-full bg-slate-900/50 p-2 text-white transition-colors hover:bg-slate-900 lg:block"
        aria-label="전체화면으로 보기"
        title="전체화면으로 보기"
      >
        <Maximize size={20} />
      </button>
    </div>
  );
};

export default GameScreen;
