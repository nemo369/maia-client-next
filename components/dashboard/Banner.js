import React, { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import Infoservice from '../../src/services/info.service';
import HelpInfo from '../popups/HelpInfo';
import FlyingWoman from '../svg/FlyingWoman';

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
      <HelpInfo className="relative top-[-50px] left-[-360px] max-w-[273px] cursor-pointer w-full z-10">
        <>
          <FlyingWoman />
          <span className="leading-6 text-white font-bold text-lg absolute z-20 text-center w-[121px] px-6 pt-6 top-0 left-0">
            {t('זקוק')}
            <br />
            להכוונה
            <br />
            אישית?
          </span>
        </>
      </HelpInfo>
    </footer>
  );
}

export default Banner;
