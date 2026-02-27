'use client';

import { useEffect } from 'react';

const BlogInfeedAds = () => {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return;
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-format="fluid"
      data-ad-layout-key="-fo+40+bw-fp-22"
      data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID}
      data-ad-slot="5659758817"
    ></ins>
  );
};

export default BlogInfeedAds;
