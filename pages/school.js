import React from 'react';
import { NextSeo } from 'next-seo';
import { seoMerge } from '../src/utils/next-seo.config';

export default function School() {
  const seo = seoMerge({
    title: 'מאגר הלימודים | ',
  });
  return (
    <div>
      <NextSeo {...seo} />
      School
    </div>
  );
}
