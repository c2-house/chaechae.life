'use client';

import { useEffect } from 'react';

const SideStickyAds = () => {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return;
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'inline-block', width: '160px', height: '600px' }}
      data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID}
      data-ad-slot="1340405709"
    ></ins>
  );
};

export default SideStickyAds;
