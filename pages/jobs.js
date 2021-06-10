import { NextSeo } from 'next-seo';
import React from 'react';
import seoObj from '../src/utils/next-seo.config';

export default function Jobs() {
  return (
    <div>
      <NextSeo {...seoObj} />
      jobs
    </div>
  );
}
