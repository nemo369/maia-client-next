import React, { useEffect, useState } from 'react';
import Infoservice from '../../src/services/info.service';
import FlyingWoman from '../svg/FlyingWoman';

function Banner() {
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
    <footer className="grid__banner   mt-12 relative h-52 mb-10">
      <div
        className="h-40 bg-gray-200 rounded-lg overflow-hidden wp-content"
        dangerouslySetInnerHTML={{ __html: bannerHtml }}
      />
      <div className="flying-women max-w-[273px] absolute top-1/2 -left-20 w-full z-10  right-auto ">
        <FlyingWoman />
        <span className="leading-6 text-white font-bold text-lg absolute z-20 text-center w-[121px] px-6 pt-6 top-0 left-0">
          זקוקה להכוונה אישית ?
        </span>
      </div>
    </footer>
  );
}

export default Banner;
