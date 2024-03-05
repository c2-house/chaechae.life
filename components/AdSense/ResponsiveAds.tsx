'use client';

import { useEffect } from 'react';

const ResponsiveAds = () => {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return;
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID}
      data-ad-slot="8504827279"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export default ResponsiveAds;
