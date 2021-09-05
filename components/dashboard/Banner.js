import React, { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import Infoservice from '../../src/services/info.service';
import HelpInfo from '../popups/HelpInfo';

function Banner() {
  const { t } = useTranslation('common');

  const [bannerHtml, setbannerHtml] = useState('');
  useEffect(() => {
    const fetchBanner = async () => {
      const { data } = await Infoservice.getBanner();
      if (data) {
        setbannerHtml(data);
      }
    };
    fetchBanner();
  }, []);
  return (
    <footer className="grid__banner relative h-52 mb-10">
      <div
        className="h-40 bg-gray-200 rounded-lg overflow-hidden wp-content"
        dangerouslySetInnerHTML={{ __html: bannerHtml }}
      />
      <HelpInfo />
    </footer>
  );
}

export default Banner;
