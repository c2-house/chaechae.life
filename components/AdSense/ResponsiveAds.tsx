'use client';

import { useEffect } from 'react';

interface Props {
  format?: 'auto' | 'horizontal';
  fullWidthResponsive?: boolean;
}

const ResponsiveAds = ({ format = 'auto', fullWidthResponsive = true }: Props) => {
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
      data-ad-format={format}
      data-full-width-responsive={String(fullWidthResponsive)}
    ></ins>
  );
};

export default ResponsiveAds;
