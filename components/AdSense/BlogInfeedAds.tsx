'use client';

import { useEffect, useRef, useState } from 'react';

const BlogInfeedAds = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const adsRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    setIsMobileView(window.innerWidth < 768);
    if (process.env.NODE_ENV !== 'production') return;
    (window.adsbygoogle = window.adsbygoogle || []).push({});
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (adsRef.current && isLoaded) {
      if (adsRef.current.dataset.adStatus === 'filled') {
        setIsFilled(true);
      }
    }
  }, [adsRef, isLoaded]);

  if (!isFilled) return <></>;

  return (
    <div className="mb-6 border-b pb-6 md:mb-8 md:pb-8">
      <ins
        ref={adsRef}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-format="fluid"
        data-ad-layout-key={isMobileView ? '-ht-f+9-7q+kc' : '-fp-1q+do-pz+7c'}
        data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID}
        data-ad-slot={isMobileView ? '8237233960' : '5659758817'}
      ></ins>
    </div>
  );
};

export default BlogInfeedAds;
