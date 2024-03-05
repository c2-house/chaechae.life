'use client';

import { useEffect, useState } from 'react';

const BlogInfeedAds = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    setIsMobileView(window.innerWidth < 768);
    if (process.env.NODE_ENV !== 'production') return;
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-format="fluid"
      data-ad-layout-key={isMobileView ? '-ht-f+9-7q+kc' : '-fp-1q+do-pz+7c'}
      data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID}
      data-ad-slot={isMobileView ? '8237233960' : '5659758817'}
    ></ins>
  );
};

export default BlogInfeedAds;
