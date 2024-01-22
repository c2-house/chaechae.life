'use client';

import clsx from 'clsx';
import { useState, useEffect } from 'react';
import ProjectShowcaseCard from './ProjectShowcaseCard';

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
    <ProjectShowcaseCard
      title={
        <p className="!mt-0 leading-relaxed">
          소중한 사람들에게
          <br />
          따뜻한{' '}
          <span
            className={clsx(
              'mr-0.5 text-2xl font-semibold text-sky-600 transition-opacity duration-500 md:text-3xl',
              isTransitioning ? 'opacity-0' : 'opacity-100',
            )}
          >
            {words[currentIndex]}
          </span>
          의 말을 전해보세요.
        </p>
      }
      showcaseType="video"
      src="/images/projects/messagebot/messagebot.mp4"
      poster="/images/projects/messagebot/messagebot-poster.jpg"
      phoneBg="bg-gradient-to-b from-white from-50% to-[#B5E1FF] to-50%"
    />
  );
};

export default MessageBot;
