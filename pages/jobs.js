import { NextSeo } from 'next-seo';
import React from 'react';
import { seoMerge } from '../src/utils/next-seo.config';

export default function Jobs() {
  const seo = seoMerge({
    title: 'משרות פנויות | ',
  });
  return (
    <div>
      <NextSeo {...seo} />
      jobs
    </div>
  );
}
