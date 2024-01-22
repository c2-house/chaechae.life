'use client';

import clsx from 'clsx';
import { useState, useEffect } from 'react';

const words = ['감사', '축하', '응원', '위로', '격려'];

const MessageBot = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrentIndex((currentIndex) => (currentIndex + 1) % words.length);
        setIsTransitioning(false);
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="not-prose mt-10 bg-slate-50 px-5 py-10 md:py-12">
      <p className="mb-6 text-center text-xl leading-loose md:mb-8 md:text-2xl">
        소중한 사람들에게
        <br />
        따뜻한{' '}
        <span
          className={clsx(
            'mr-0.5 text-2xl font-semibold transition-opacity duration-500 md:text-3xl',
            isTransitioning ? 'opacity-0' : 'opacity-100',
          )}
        >
          {words[currentIndex]}
        </span>
        의 말을 전해보세요.
      </p>

      <div className="mx-auto max-w-[300px] overflow-hidden rounded-[40px] border-[10px] border-slate-200 bg-gradient-to-b from-white to-[#B5E1FF] py-4 shadow-md">
        <video
          className="h-auto w-full"
          poster="/images/projects/messagebot/messagebot-poster.jpg"
          playsInline
          autoPlay
          loop
          muted
        >
          <source src="/images/projects/messagebot/messagebot.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default MessageBot;
