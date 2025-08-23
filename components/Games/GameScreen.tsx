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
      <iframe
        ref={iframeRef}
        src={url}
        title={`${name} 게임`}
        className="h-[70vh] min-h-[500px] w-full max-w-7xl rounded-xl border border-gray-200 shadow-lg"
        allowFullScreen
      ></iframe>
      <button
        onClick={handleFullScreen}
        className="absolute right-4 top-4 rounded-full bg-slate-900/50 p-2 text-white transition-colors hover:bg-slate-900"
        aria-label="전체화면으로 보기"
        title="전체화면으로 보기"
      >
        <Maximize size={20} />
      </button>
    </div>
  );
};

export default GameScreen;
